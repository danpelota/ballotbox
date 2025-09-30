
    select
      count(*) as failures,
      count(*) != 0 as should_warn,
      count(*) != 0 as should_error
    from (
      
    
  



select
    1
from "dev"."main"."stg_voters"

where not(last_voted_date last_voted_date is null or last_voted_date::date is not null)


  
  
      
    ) dbt_internal_test