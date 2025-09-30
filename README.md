# ballotbox

A self-contained data analytics pipeline demonstrating orchestration, transformation, and visualization of voter registration data. Built with Airflow 3, dbt-core, DuckDB, and Evidence.dev.

## Quick Start

### 1. Start the Services

Build and start both the Airflow orchestrator and Evidence reports server:

```bash
docker compose up --build
```

This will start two services:
- Airflow: http://localhost:8080
- Evidence Dashboard: http://localhost:3000

### 2. Run the DAG

**Access Airflow UI** at http://localhost:8080

**Authentication**: Airflow 3.0 runs in standalone mode with auto-generated credentials. Look for the password in the container logs:

```
Simple auth manager | Password for user 'admin': {{ password }}
```

**Execute the DAG**:
Navigate to the DAGs page and execute `ballotbox_dbt_build`

The DAG will execute the full dbt workflow: dependencies → sources → snapshots → models → tests. The first task will do so once with the provided data, and the second task will do so again with modified data to simulate incremental updates in place.

### 3. View the Dashboard

Once the DAG completes successfully, visit http://localhost:3000 to view the BI dashboard, which is built as a static site and queried via duckdb WASM in the browser.

## Features

### Snapshot tracking
- Snapshots of voter records to maintain full historical state using a check strategy
- Captures changes in registration status, party affiliation, and demographics
- Enables point-in-time analysis and trend reporting
- Implemented in `dbt-ballotbox/snapshots/snap_int_voters.sql`

### Model Testing
- **Schema tests**: Uniqueness, not-null constraints, referential integrity
- **Custom generic tests**: Email validation, data quality checks
- **Data contracts**: Column names, ordering, and types are enforced in a data contract during a preflight check
- Tests run automatically as part of the DAG execution

### Embedded BI-as-Code Dashboard
- **BI Dashboard** is a static site built from markdown + SQL in the `reports/` directory
- **Pre-built visualizations**: demographics, turnout analysis, historical trends
- **Version-controlled** dashboard definitions in `dbt-ballotbox/reports/pages/`, and code changes are coordinated with modeling code changes
- **Build command** executed automatically via Airflow after successful dbt project builds

### Orchestration with Airflow
- **BashOperator** execution of dbt commands in sequence for simplicity, although in production it's preferable to call tasks via a containerized operator
- **Mounted volumes** for live development without rebuilding containers

## Project Organization

```
ballotbox/
├── data/                          # Source CSV files (synthetic voter data)
│   ├── voters.csv.gz              # Base voter registration dataset
│   └── voters_updated.csv.gz     # Simulated data changes for SCD testing
│
├── dbt-ballotbox/                 # dbt transformation project
│   ├── models/
│   │   ├── staging/              # 1:1 with sources, basic validation
│   │   ├── intermediate/         # Business logic, deduplication, derived fields
│   │   └── marts/                # Analytics-ready, denormalized models
│   ├── snapshots/                # Type 2 SCD implementation
│   ├── tests/                    # Custom data quality tests
│   └── reports/                  # Evidence.dev dashboard project
│       └── pages/                # Dashboard page definitions (markdown + SQL)
│
├── orchestrator/                  # Airflow configuration
│   ├── dags/                     # DAG definitions
│   │   └── ballotbox_dbt_dag.py # Main orchestration DAG
│   └── Dockerfile                # Airflow container configuration
│
└── docker-compose.yml            # Multi-service orchestration
```

## Data Pipeline Flow

1. **Source**: CSV files read directly by DuckDB via dbt source definitions
2. **Staging** (`stg_voters`): Light transformation, data type casting, basic tests
3. **Intermediate** (`int_voters`): Deduplication, age group calculation, demographic enrichment
4. **Snapshot** (`snap_int_voters`): Historical state capture after deduplication
5. **Marts**: Final analytics models optimized for reporting
6. **Dashboard**: Evidence.dev queries marts to generate static visualizations


## Development

### Live Development Mode

The `docker-compose.yml` mounts local directories for immediate updates:
- **DAGs**: Changes reflected in Airflow UI without restart
- **dbt models**: Modify SQL and re-run via DAG
- **Evidence pages**: Edit markdown, rebuild via `npm run sources && npm run build`

### Testing Snapshot Functionality

Simulate incremental data changes to test the Type 2 SCD:

```bash
# Initial load
dbt build --vars '{"voters_file_path": "data/voters.csv.gz"}'

# Simulate in-place data update
dbt build --vars '{"voters_file_path": "data/voters_updated.csv.gz"}'
```

The snapshot will capture both states, allowing historical comparison in the dashboard.
