---
title: Voter Turnout
---

# Voter Turnout Analysis

```sql states
select distinct state
from voter_analytics.mrt_voter_turnout
order by state
```

<Dropdown name=state_filter data={states} value=state defaultValue="">
    <DropdownOption valueLabel="All States" value=""/>
</Dropdown>

```sql turnout_data
select
    state,
    age_group,
    party,
    total_voters,
    voted_count,
    turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${inputs.state_filter.value}', '') = '' or state = '${inputs.state_filter.value}'
order by state, age_group, party
```

## Turnout by State

```sql state_turnout
select
    state,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${inputs.state_filter.value}', '') = '' or state = '${inputs.state_filter.value}'
group by state
order by turnout_pct desc
```

<BarChart
    data={state_turnout}
    x=state
    y=turnout_pct
    title="Turnout Rate by State"
    yFmt=pct
/>

## Turnout by Party

```sql party_turnout
select
    party,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${inputs.state_filter.value}', '') = '' or state = '${inputs.state_filter.value}'
group by party
order by turnout_pct desc
```

<BarChart
    data={party_turnout}
    x=party
    y=turnout_pct
    title="Turnout Rate by Party"
    yFmt=pct
/>

## Turnout by Age Group

```sql age_turnout
select
    age_group,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${inputs.state_filter.value}', '') = '' or state = '${inputs.state_filter.value}'
group by age_group
order by age_group
```

<BarChart
    data={age_turnout}
    x=age_group
    y=turnout_pct
    xOrder={['<29', '30-49', '50-64', '65+']}
    title="Turnout Rate by Age Group"
    yFmt=pct
/>

## Detailed Breakdown

<DataTable data={turnout_data} />