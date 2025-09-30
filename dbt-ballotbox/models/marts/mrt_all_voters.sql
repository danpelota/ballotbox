-- Passthrough model of all voters for more fine-grained analytics
select * 
from {{ ref('int_voters') }}