with
    voters as (select * from {{ ref("stg_voters") }}),

    deduped as (
        select
            *,
            /*
            An example as to how we might prioritize the duplicated voter ID
            with better populated fields
            */
            (email is not null)::int
            + (registered_date is not null)::int
            + (last_voted_date is not null)::int as non_null_cols,
        from voters
        qualify row_number() over (partition by id order by non_null_cols desc) = 1
    )

select
    * exclude (non_null_cols),

    case
        when age < 30
        then '<29'
        when age between 30 and 49
        then '30-49'
        when age between 50 and 64
        then '50-64'
        when age >= 65
        then '65+'
    end as age_group,

    coalesce(last_voted_date = '2024-11-05'::date, false) as voted_gen24,

    coalesce(last_voted_date > '2020-11-03'::date, false) as is_active

from deduped
