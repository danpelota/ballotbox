
    select
      count(*) as failures,
      count(*) != 0 as should_warn,
      count(*) != 0 as should_error
    from (
      
    
  
    
    

with all_values as (

    select
        party as value_field,
        count(*) as n_records

    from "dev"."main"."stg_voters"
    group by party

)

select *
from all_values
where value_field not in (
    'Democrat','Independent','Republican'
)



  
  
      
    ) dbt_internal_test