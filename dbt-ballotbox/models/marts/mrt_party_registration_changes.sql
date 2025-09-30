select
    state,
    party,
    -- We'll use the SCD timestamp as a proxy for the record change timestamp
    dbt_valid_from as updated_at,
    count(*) as registration_count
from {{ ref('snap_int_voters') }}
group by state, party, updated_at
order by updated_at, state, party