
  
    
    

    create  table
      "dev"."main"."mrt_voter_counts__dbt_tmp"
  
    as (
      -- Voter counts aggregated by state, age group, and party
select
    state,
    age_group,
    party,
    count(*) as voter_count
from "dev"."main"."int_voters"
group by state, age_group, party
    );
  
  