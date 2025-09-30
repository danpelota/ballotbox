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

- **Airflow 3.0**: Orchestrates the data pipeline in standalone mode
- **dbt**: Transforms raw voter data into analytics-ready models
- **DuckDB**: Local database engine for fast analytics

## Development

The configuration mounts local directories for live development:
- DAGs directory is mounted for immediate Airflow updates
- dbt project is mounted for model development
- Data directory provides access to source CSV files 


## TODO

[X] - Basic dbt project setup, reading CSV as duckdb pass-through source
[X] - Airflow standalone setup
[X] - Mount dbt project directly inside airflow container
[X] - Build intermediate models and tests
[ ] - Add snapshot on source
[ ] - Build dbt docs in GHA on merge
[ ] - Build marts models and tests
[ ] - Containerize dbt project, call from Airflow with DockerOperator
[ ] - Add evidence.dev dashboard
[ ] - Serve evidence static site from reports directory
[ ] - Github CD workflow to deploy evidence site to pages
[ ] - Airflow task to download remote voter file
[ ] - Add duckdb ui in container? Might need a proxy for multiple connections?
[ ] - dbt code formatting with sqlfmt
