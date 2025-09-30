with old_records as (
    select
        id,
        first_name,
        last_name,
        state,
        party,
        dbt_valid_from,
        dbt_valid_to
    from "dev"."snapshots"."snap_int_voters"
    where dbt_valid_to is not null
),

new_records as (
    select
        id,
        party,
        dbt_valid_from
    from "dev"."snapshots"."snap_int_voters"
)

select
    old.id,
    old.first_name,
    old.last_name,
    old.state,
    old.party as old_party,
    new.party as new_party,
    old.dbt_valid_to as switched_at
from old_records old
join new_records new
    on old.id = new.id
    and old.dbt_valid_to = new.dbt_valid_from
where old.party != new.party
order by old.dbt_valid_to desc