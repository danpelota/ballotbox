
  
    
    

    create  table
      "dev"."main"."base_voters__dbt_tmp"
  
    as (
      select *
from read_csv( 'data/voters.csv.gz' )
    );
  
  