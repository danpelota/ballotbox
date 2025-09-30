
  
    
    

    create  table
      "dev"."main"."voter_counts__dbt_tmp"
  
    as (
      select count(*) from "dev"."main"."stg_voters"
    );
  
  