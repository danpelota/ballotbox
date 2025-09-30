
  
    
    

    create  table
      "dev"."main"."mrt_all_voters__dbt_tmp"
  
    as (
      -- Passthrough model of all voters for more fine-grained analytics
select * 
from "dev"."main"."int_voters"
    );
  
  