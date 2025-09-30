with
     __dbt__cte__stg_voters as (

-- Fixture for stg_voters
select 
    
    cast('V001' as character varying(256))
 as "id", 
    
    cast('John' as character varying(256))
 as "first_name", 
    
    cast('Doe' as character varying(256))
 as "last_name", 
    
    cast(35 as INTEGER)
 as "age", 
    
    cast('M' as character varying(256))
 as "gender", 
    
    cast('CA' as character varying(256))
 as "state", 
    
    cast('Democrat' as character varying(256))
 as "party", 
    
    cast('john@example.com' as character varying(256))
 as "email", 
    
    cast('2020-01-15' as DATE)
 as "registered_date", 
    
    cast('2024-11-05' as DATE)
 as "last_voted_date"
union all
select 
    
    cast('V001' as character varying(256))
 as "id", 
    
    cast('John' as character varying(256))
 as "first_name", 
    
    cast('Doe' as character varying(256))
 as "last_name", 
    
    cast(35 as INTEGER)
 as "age", 
    
    cast('M' as character varying(256))
 as "gender", 
    
    cast('CA' as character varying(256))
 as "state", 
    
    cast('Democrat' as character varying(256))
 as "party", 
    
    cast(null as character varying(256))
 as "email", 
    
    cast(null as DATE)
 as "registered_date", 
    
    cast(null as DATE)
 as "last_voted_date"
), voters as (select * from __dbt__cte__stg_voters),

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
        then '29 and under'
        when age between 30 and 49
        then '30-49'
        when age between 50 and 64
        then '50-64'
        when age >= 65
        then '65 +'
    end as age_group,

    coalesce(last_voted_date = '2024-11-05'::date, false) as voted_gen24,

    coalesce(last_voted_date > '2020-11-03'::date, false) as is_active

from deduped