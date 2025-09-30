select 
    id,
    first_name,
    last_name,
    try_cast(age as integer) as age,

    case
        when gender in ('M', 'F', 'O') then gender
    end as gender,

    case
        when state in {{ get_state_codes() }} then state
    end as state,

    case
        when party in ('Republican', 'Democrat', 'Independent') then party
    end as party,

    case
        when {{ is_valid_email('email') }} then email
    end as email,

    try_cast(registered_date as date) as registered_date,
    try_cast(last_voted_date as date) as last_voted_date

from read_csv( {{ source("voters", "voters") }}, header=True)