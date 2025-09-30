{% snapshot snap_int_voters %}

{{
    config(
      target_schema='snapshots',
      unique_key='id',
      strategy='check',
      check_cols='all',
      invalidate_hard_deletes=True,
    )
}}

select * from {{ ref('int_voters') }}

{% endsnapshot %}