
    select
      count(*) as failures,
      count(*) != 0 as should_warn,
      count(*) != 0 as should_error
    from (
      
    
  
    
    



select last_voted_date
from "dev"."main"."stg_voters"
where last_voted_date is null



  
  
      
    ) dbt_internal_test