
-- Fixture for stg_voters
select 
    
    cast('V001' as character varying(256))
 as "id", 
    
    cast('John' as character varying(256))
 as "first_name", 
    
    cast('Doe' as character varying(256))
 as "last_name", 
    
    cast(35 as INTEGER)
 as "age", 
    
    cast('M' as character varying(256))
 as "gender", 
    
    cast('CA' as character varying(256))
 as "state", 
    
    cast('Democrat' as character varying(256))
 as "party", 
    
    cast('john@example.com' as character varying(256))
 as "email", 
    
    cast('2020-01-15' as DATE)
 as "registered_date", 
    
    cast('2024-11-05' as DATE)
 as "last_voted_date"
union all
select 
    
    cast('V001' as character varying(256))
 as "id", 
    
    cast('John' as character varying(256))
 as "first_name", 
    
    cast('Doe' as character varying(256))
 as "last_name", 
    
    cast(35 as INTEGER)
 as "age", 
    
    cast('M' as character varying(256))
 as "gender", 
    
    cast('CA' as character varying(256))
 as "state", 
    
    cast('Democrat' as character varying(256))
 as "party", 
    
    cast(null as character varying(256))
 as "email", 
    
    cast(null as DATE)
 as "registered_date", 
    
    cast(null as DATE)
 as "last_voted_date"