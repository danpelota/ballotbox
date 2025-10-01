



select
    1
from "dev"."main"."stg_voters"

where not(last_voted_date last_voted_date is null or last_voted_date::date is not null)

