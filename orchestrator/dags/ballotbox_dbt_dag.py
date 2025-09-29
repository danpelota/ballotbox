from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.bash import BashOperator

# DAG configuration
default_args = {
    'owner': 'ballotbox',
    'depends_on_past': False,
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
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

# dbt build task - runs all models, tests, and snapshots
dbt_build = BashOperator(
    task_id='dbt_build',
    bash_command='cd /opt/dbt-ballotbox && dbt build',
    dag=dag,
)

dbt_build