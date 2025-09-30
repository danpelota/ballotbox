---
title: Voter Counts
---

# Voter Registration Counts

```sql voter_counts
select
    state,
    age_group,
    party,
    voter_count
from voter_analytics.mrt_voter_counts
order by state, age_group, party
```

## Counts by State

```sql state_totals
select
    state,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
group by state
order by total_voters desc
```

<BarChart
    data={state_totals}
    x=state
    y=total_voters
    title="Registered Voters by State"
/>

## Counts by Party

```sql party_totals
select
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
group by party
order by total_voters desc
```

<BarChart
    data={party_totals}
    x=party
    y=total_voters
    title="Registered Voters by Party"
/>

## Counts by Age Group

```sql age_totals
select
    age_group,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
group by age_group
order by age_group
```

<BarChart
    data={age_totals}
    x=age_group
    y=total_voters
    title="Registered Voters by Age Group"
/>

## Detailed Breakdown

<DataTable data={voter_counts} />