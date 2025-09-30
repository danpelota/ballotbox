
    
    

with all_values as (

    select
        gender as value_field,
        count(*) as n_records

    from "dev"."main"."stg_voters"
    group by gender

)

select *
from all_values
where value_field not in (
    'M','F','O'
)


