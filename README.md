# ballotbox
Orchestration and analytics for voter data using Airflow 3.0 and dbt

## Project Structure

- `data/` - Synthetic voter registration data (CSV files)
- `dbt-ballotbox/` - dbt project for data transformation and modeling
- `orchestrator/` - Airflow DAGs and Docker configuration
- `docker-compose.yml` - Docker Compose configuration for local development

## Getting Started

1. Build and start the Airflow container:
   ```bash
   docker compose up --build
   ```

2. Access the Airflow UI at http://localhost:8080

3. **Authentication**: Airflow 3.0 runs in standalone mode with auto-generated credentials. The username and password will be printed to STDOUT when the container starts. Look for output like:

```
Simple auth manager | Password for user 'admin': {{ password }}
```

## Components

- **Airflow**: Orchestrates dbt invocations in standalone mode
- **dbt**: Transforms raw voter data into analytics-ready models
- **DuckDB**: Local database engine

## dbt Project Structure

- `staging/`: Staging models for basic validation and cleanup, maintaing a 1:1
relationship with sources
- `intermediate/`: Deduplicated voters with derived fields (age groups,
demographic categories)
- `snapshots/`: Type-2 slowly changing dimension to track incremental changes in voter records
- `marts/`: Analytics-ready models

## Development

The configuration mounts local directories for live development:
- DAGs directory is mounted for immediate Airflow updates
- dbt project is mounted for model development
- Data directory provides access to source CSV files

### Testing Snapshot Changes

To simulate voter data changes and test the snapshot functionality, use the
`voters_file_path` variable to point to a simulated in-place update of the voter
file

```bash
dbt build --vars '{"voters_file_path": "data/voters.csv.gz"}'
dbt build --vars '{"voters_file_path": "data/voters_updated.csv.gz"}'
```

## TODO

[X] - Basic dbt project setup, reading CSV as duckdb pass-through source
[X] - Airflow standalone setup
[X] - Mount dbt project directly inside airflow container
[X] - Build staging models and tests
[x] - Build intermediate models and tests
[x] - Add snapshot on source
[x] - Build marts models and tests
[ ] - Add evidence.dev dashboard
[ ] - Build dbt docs in GHA on merge
[ ] - Containerize dbt project, call from Airflow with DockerOperator
[ ] - Serve evidence static site from reports directory
[ ] - Github CD workflow to deploy evidence site to pages
[ ] - Airflow task to download remote voter file
[ ] - Add duckdb ui in container? Might need a proxy for multiple connections?
[ ] - dbt code formatting with sqlfmt
