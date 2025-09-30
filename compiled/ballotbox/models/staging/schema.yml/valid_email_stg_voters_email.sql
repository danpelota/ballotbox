

select *
from "dev"."main"."stg_voters"
where not 
    regexp_matches(email, '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')


