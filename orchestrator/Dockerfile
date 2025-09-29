FROM apache/airflow:slim-3.1.0-python3.13

# Install dbt for data transformation
USER root
RUN apt-get update && apt-get install -y git && apt-get clean
USER airflow
RUN pip install dbt-core dbt-duckdb

# For demonstration purposes only, run in standalone mode with single threaded
# sqlsite metadata database
ENV AIRFLOW__CORE__EXECUTOR=SequentialExecutor
ENV AIRFLOW__DATABASE__SQL_ALCHEMY_CONN=sqlite:////opt/airflow/airflow.db
ENV AIRFLOW__CORE__LOAD_EXAMPLES=False
ENV AIRFLOW__CORE__DAGS_FOLDER=/opt/airflow/dags

# Webserver UI
EXPOSE 8080

# Initialize database and start in standalone mode
CMD ["airflow", "standalone"]
