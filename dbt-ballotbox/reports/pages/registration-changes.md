---
title: Registration Changes
---

# Party Registration Changes Over Time

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

```sql registration_data
select
    updated_at,
    party,
    sum(registration_count) as registration_count
from voter_analytics.mrt_party_registration_changes
where state like '${inputs.state_filter.value}'
group by updated_at, party
order by updated_at, party
```

## Registration Trends

<LineChart
    data={registration_data}
    x=updated_at
    y=registration_count
    series=party
    title="Party Registration Changes - {inputs.state_filter.label}"
/>

## Detailed Data

<DataTable data={registration_data} />