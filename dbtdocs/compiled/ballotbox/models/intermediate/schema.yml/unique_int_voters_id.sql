
    
    

select
    id as unique_field,
    count(*) as n_records

from "dev"."main"."int_voters"
where id is not null
group by id
having count(*) > 1


