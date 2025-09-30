



select
    1
from "dev"."main"."stg_voters"

where not(registered_date registered_date::date is not null)

