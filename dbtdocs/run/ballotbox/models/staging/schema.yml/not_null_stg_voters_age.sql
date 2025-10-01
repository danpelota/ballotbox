
    select
      count(*) as failures,
      count(*) != 0 as should_warn,
      count(*) != 0 as should_error
    from (
      
    
  
    
    



select age
from "dev"."main"."stg_voters"
where age is null



  
  
      
    ) dbt_internal_test