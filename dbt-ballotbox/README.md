# dbt-ballotbox

## Local Development

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
dbt build
```

Output database: `target/dev.duckdb`