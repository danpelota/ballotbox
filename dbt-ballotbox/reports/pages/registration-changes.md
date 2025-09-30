---
title: Party Switchers
---

# Recent Party Switchers

```sql states_list
select distinct state
from voter_analytics.mrt_party_registration_changes
order by state
```

<Dropdown
    data={states_list}
    name=state_filter
    value=state
    title="Filter by State"
>
    <DropdownOption valueLabel="All States" value="%" />
</Dropdown>

```sql party_switchers
select
    id,
    first_name,
    last_name,
    state,
    old_party,
    new_party,
    switched_at
from voter_analytics.mrt_party_registration_changes
where state like '${inputs.state_filter.value}'
order by switched_at desc
```

```sql switch_summary
select
    old_party || ' → ' || new_party as party_change,
    count(*) as num_voters
from voter_analytics.mrt_party_registration_changes
where state like '${inputs.state_filter.value}'
group by old_party, new_party
order by num_voters desc
```

## Switch Summary

<DataTable data={switch_summary} />

## All Party Switchers

<DataTable data={party_switchers} />