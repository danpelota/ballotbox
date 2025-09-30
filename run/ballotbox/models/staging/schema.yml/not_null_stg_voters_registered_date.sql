
    select
      count(*) as failures,
      count(*) != 0 as should_warn,
      count(*) != 0 as should_error
    from (
      
    
  
    
    



select registered_date
from "dev"."main"."stg_voters"
where registered_date is null



  
  
      
    ) dbt_internal_test