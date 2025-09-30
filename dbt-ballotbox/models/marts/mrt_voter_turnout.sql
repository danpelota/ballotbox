-- Voter turnout rates aggregated by state, age group, and party
select
    state,
    age_group,
    party,
    count(*) as total_voters,
    sum(voted_gen24::int) as voted_count,
    voted_count::numeric / total_voters as turnout_pct
from {{ ref('int_voters') }}
group by state, age_group, party