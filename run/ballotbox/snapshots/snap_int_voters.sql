
      update "dev"."snapshots"."snap_int_voters" as DBT_INTERNAL_TARGET
    set dbt_valid_to = DBT_INTERNAL_SOURCE.dbt_valid_to
    from "snap_int_voters__dbt_tmp20250930073902846241" as DBT_INTERNAL_SOURCE
    where DBT_INTERNAL_SOURCE.dbt_scd_id::text = DBT_INTERNAL_TARGET.dbt_scd_id::text
      and DBT_INTERNAL_SOURCE.dbt_change_type::text in ('update'::text, 'delete'::text)
      
        and DBT_INTERNAL_TARGET.dbt_valid_to is null;
      

    insert into "dev"."snapshots"."snap_int_voters" ("id", "first_name", "last_name", "age", "gender", "state", "party", "email", "registered_date", "last_voted_date", "age_group", "voted_gen24", "is_active", "dbt_updated_at", "dbt_valid_from", "dbt_valid_to", "dbt_scd_id")
    select DBT_INTERNAL_SOURCE."id",DBT_INTERNAL_SOURCE."first_name",DBT_INTERNAL_SOURCE."last_name",DBT_INTERNAL_SOURCE."age",DBT_INTERNAL_SOURCE."gender",DBT_INTERNAL_SOURCE."state",DBT_INTERNAL_SOURCE."party",DBT_INTERNAL_SOURCE."email",DBT_INTERNAL_SOURCE."registered_date",DBT_INTERNAL_SOURCE."last_voted_date",DBT_INTERNAL_SOURCE."age_group",DBT_INTERNAL_SOURCE."voted_gen24",DBT_INTERNAL_SOURCE."is_active",DBT_INTERNAL_SOURCE."dbt_updated_at",DBT_INTERNAL_SOURCE."dbt_valid_from",DBT_INTERNAL_SOURCE."dbt_valid_to",DBT_INTERNAL_SOURCE."dbt_scd_id"
    from "snap_int_voters__dbt_tmp20250930073902846241" as DBT_INTERNAL_SOURCE
    where DBT_INTERNAL_SOURCE.dbt_change_type::text = 'insert'::text;


  