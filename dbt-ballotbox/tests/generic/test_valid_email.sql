{% test valid_email(model, column_name) %}

select *
from {{ model }}
where not {{ is_valid_email(column_name) }}

{% endtest %}