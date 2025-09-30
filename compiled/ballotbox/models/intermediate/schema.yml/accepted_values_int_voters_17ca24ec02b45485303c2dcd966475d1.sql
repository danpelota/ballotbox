
    
    

with all_values as (

    select
        age_group as value_field,
        count(*) as n_records

    from "dev"."main"."int_voters"
    group by age_group

)

select *
from all_values
where value_field not in (
    '29 and under','30-49','50-64','65 +'
)


