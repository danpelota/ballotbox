from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.bash import BashOperator

# DAG configuration
default_args = {
    'owner': 'ballotbox',
    'depends_on_past': False,
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 0
}

# Create the DAG
dag = DAG(
    'ballotbox_dbt_build',
    default_args=default_args,
    description='Demo DAG to run dbt build for ballotbox voter data processing',
    schedule=None,  # Manual trigger only for demo
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=['demo', 'dbt', 'ballotbox'],
)

# dbt build task for first voter file
dbt_build_voters = BashOperator(
    task_id='dbt_build_voters',
    bash_command='cd /opt/dbt-ballotbox && dbt build --vars \'{"voters_file_path": "data/voters.csv.gz"}\'',
    dag=dag,
)

# dbt build task for updated voter file
dbt_build_voters_updated = BashOperator(
    task_id='dbt_build_voters_updated',
    bash_command='cd /opt/dbt-ballotbox && dbt build --vars \'{"voters_file_path": "data/voters_updated.csv.gz"}\'',
    dag=dag,
)

# Evidence.dev report build task
evidence_build = BashOperator(
    task_id='evidence_build',
    bash_command='cd /opt/dbt-ballotbox && npm --prefix ./reports install && npm --prefix reports run build',
    dag=dag,
)

# Run builds sequentially
dbt_build_voters >> dbt_build_voters_updated >> evidence_build
