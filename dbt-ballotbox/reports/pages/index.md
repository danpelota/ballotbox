---
title: Voter Analytics Dashboard
---

# Voter File Overview

```sql states_list
select distinct state
from voter_analytics.mrt_voter_counts
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

```sql total_stats
select
    sum(voter_count) as total_registered,
    count(distinct state) as unique_states,
    count(distinct party) as parties
from voter_analytics.mrt_voter_counts
where state like '${inputs.state_filter.value}'
```

```sql turnout_stats
select
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as overall_turnout
from voter_analytics.mrt_voter_turnout
where state like '${inputs.state_filter.value}'
```

<BigValue
    data={turnout_stats}
    value=total_registered
    title="Total Registered Voters"
/>

<BigValue
    data={turnout_stats}
    value=total_voted
    title="Total Voted 2024 General"
/>

<BigValue
    data={turnout_stats}
    value=overall_turnout
    title="Overall Turnout Rate"
    fmt=pct
/>

## Gen24 Turnout by State

```sql state_summary
select
    state,
    sum(total_voters) as voter_count,
    sum(voted_count) as voted_gen24,
    voted_gen24::numeric / voter_count as turnout_rate
from mrt_voter_turnout
where state like '${inputs.state_filter.value}'
group by state
order by state
```

<DataTable data={state_summary} />

## Reports

- [Voter Counts](/voter-counts) - Registration counts by state, age group, and party
- [Voter Turnout](/voter-turnout) - Turnout rates and voting patterns
- [Registration Changes](/registration-changes) - Party registration trends over time
