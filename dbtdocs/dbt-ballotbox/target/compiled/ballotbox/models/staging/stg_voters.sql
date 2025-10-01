select
    id,
    first_name,
    last_name,
    try_cast(age as integer) as age,

    case when gender in ('M', 'F', 'O') then gender end as gender,

    case when state in ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'] then state end as state,

    case
        when party in ('Republican', 'Democrat', 'Independent') then party
    end as party,

    case when 
    regexp_matches(email, '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
 then email end as email,

    try_cast(registered_date as date) as registered_date,
    try_cast(last_voted_date as date) as last_voted_date

from read_csv('data/voters_updated.csv.gz', header = true)