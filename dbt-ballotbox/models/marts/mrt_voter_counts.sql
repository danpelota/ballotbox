-- Voter counts aggregated by state, age group, and party
select
    state,
    age_group,
    party,
    count(*) as voter_count
from {{ ref('int_voters') }}
group by state, age_group, party