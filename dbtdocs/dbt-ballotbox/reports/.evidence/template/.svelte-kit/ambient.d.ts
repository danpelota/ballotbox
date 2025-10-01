
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const AIRFLOW_CTX_TRY_NUMBER: string;
	export const _AIRFLOW_PARSING_CONTEXT_TASK_ID: string;
	export const DUMB_INIT_SETSID: string;
	export const LANGUAGE: string;
	export const AIRFLOW__CORE__LOAD_EXAMPLES: string;
	export const npm_config_user_agent: string;
	export const AIRFLOW_CTX_LOGICAL_DATE: string;
	export const AIRFLOW_CTX_DAG_OWNER: string;
	export const HOSTNAME: string;
	export const INSTALL_MYSQL_CLIENT_TYPE: string;
	export const PIP_CACHE_DIR: string;
	export const AIRFLOW__WEBSERVER__RELOAD_ON_PLUGIN_CHANGE: string;
	export const npm_node_execpath: string;
	export const AIRFLOW_USER_HOME_DIR: string;
	export const SHLVL: string;
	export const RUNTIME_APT_DEPS: string;
	export const AIRFLOW_INSTALLATION_METHOD: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const EVIDENCE_IS_BUILDING: string;
	export const INSTALL_POSTGRES_CLIENT: string;
	export const npm_package_json: string;
	export const npm_package_engines_node: string;
	export const AIRFLOW_CTX_TASK_ID: string;
	export const NODE_OPTIONS: string;
	export const INSTALL_MSSQL_CLIENT: string;
	export const AIRFLOW_PIP_VERSION: string;
	export const LC_CTYPE: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const ADDITIONAL_RUNTIME_APT_DEPS: string;
	export const COMMIT_SHA: string;
	export const AIRFLOW_CTX_DAG_RUN_ID: string;
	export const COLOR: string;
	export const _AIRFLOW_PARSING_CONTEXT_DAG_ID: string;
	export const AIRFLOW_HOME: string;
	export const npm_config_audit: string;
	export const INSTALL_MYSQL_CLIENT: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const npm_config_cache: string;
	export const AIRFLOW__DATABASE__SQL_ALCHEMY_CONN: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const RUNTIME_APT_COMMAND: string;
	export const AIRFLOW_IMAGE_TYPE: string;
	export const AIRFLOW_UID: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const UV_CACHE_DIR: string;
	export const BUILD_ID: string;
	export const AIRFLOW_CTX_DAG_ID: string;
	export const LD_PRELOAD: string;
	export const LANG: string;
	export const AIRFLOW_USE_UV: string;
	export const AIRFLOW__CORE__EXECUTOR: string;
	export const AIRFLOW_PYTHON_VERSION: string;
	export const AIRFLOW__CORE__SQL_ALCHEMY_CONN: string;
	export const npm_config_loglevel: string;
	export const npm_config_fund: string;
	export const npm_lifecycle_script: string;
	export const AIRFLOW_UV_VERSION: string;
	export const LC_MESSAGES: string;
	export const DEBIAN_FRONTEND: string;
	export const ADDITIONAL_RUNTIME_APT_COMMAND: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const EVIDENCE_DATA_URL_PREFIX: string;
	export const VIRTUAL_ENV: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const AIRFLOW__CORE__DAGS_FOLDER: string;
	export const PWD: string;
	export const AIRFLOW_VERSION: string;
	export const LC_ALL: string;
	export const npm_execpath: string;
	export const GUNICORN_CMD_ARGS: string;
	export const BASE_IMAGE: string;
	export const npm_config_global_prefix: string;
	export const npm_package_engines_npm: string;
	export const npm_command: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const EVIDENCE_DATA_DIR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		AIRFLOW_CTX_TRY_NUMBER: string;
		_AIRFLOW_PARSING_CONTEXT_TASK_ID: string;
		DUMB_INIT_SETSID: string;
		LANGUAGE: string;
		AIRFLOW__CORE__LOAD_EXAMPLES: string;
		npm_config_user_agent: string;
		AIRFLOW_CTX_LOGICAL_DATE: string;
		AIRFLOW_CTX_DAG_OWNER: string;
		HOSTNAME: string;
		INSTALL_MYSQL_CLIENT_TYPE: string;
		PIP_CACHE_DIR: string;
		AIRFLOW__WEBSERVER__RELOAD_ON_PLUGIN_CHANGE: string;
		npm_node_execpath: string;
		AIRFLOW_USER_HOME_DIR: string;
		SHLVL: string;
		RUNTIME_APT_DEPS: string;
		AIRFLOW_INSTALLATION_METHOD: string;
		npm_config_noproxy: string;
		HOME: string;
		OLDPWD: string;
		EVIDENCE_IS_BUILDING: string;
		INSTALL_POSTGRES_CLIENT: string;
		npm_package_json: string;
		npm_package_engines_node: string;
		AIRFLOW_CTX_TASK_ID: string;
		NODE_OPTIONS: string;
		INSTALL_MSSQL_CLIENT: string;
		AIRFLOW_PIP_VERSION: string;
		LC_CTYPE: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		ADDITIONAL_RUNTIME_APT_DEPS: string;
		COMMIT_SHA: string;
		AIRFLOW_CTX_DAG_RUN_ID: string;
		COLOR: string;
		_AIRFLOW_PARSING_CONTEXT_DAG_ID: string;
		AIRFLOW_HOME: string;
		npm_config_audit: string;
		INSTALL_MYSQL_CLIENT: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		npm_config_cache: string;
		AIRFLOW__DATABASE__SQL_ALCHEMY_CONN: string;
		npm_config_node_gyp: string;
		PATH: string;
		RUNTIME_APT_COMMAND: string;
		AIRFLOW_IMAGE_TYPE: string;
		AIRFLOW_UID: string;
		NODE: string;
		npm_package_name: string;
		UV_CACHE_DIR: string;
		BUILD_ID: string;
		AIRFLOW_CTX_DAG_ID: string;
		LD_PRELOAD: string;
		LANG: string;
		AIRFLOW_USE_UV: string;
		AIRFLOW__CORE__EXECUTOR: string;
		AIRFLOW_PYTHON_VERSION: string;
		AIRFLOW__CORE__SQL_ALCHEMY_CONN: string;
		npm_config_loglevel: string;
		npm_config_fund: string;
		npm_lifecycle_script: string;
		AIRFLOW_UV_VERSION: string;
		LC_MESSAGES: string;
		DEBIAN_FRONTEND: string;
		ADDITIONAL_RUNTIME_APT_COMMAND: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		EVIDENCE_DATA_URL_PREFIX: string;
		VIRTUAL_ENV: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		AIRFLOW__CORE__DAGS_FOLDER: string;
		PWD: string;
		AIRFLOW_VERSION: string;
		LC_ALL: string;
		npm_execpath: string;
		GUNICORN_CMD_ARGS: string;
		BASE_IMAGE: string;
		npm_config_global_prefix: string;
		npm_package_engines_npm: string;
		npm_command: string;
		INIT_CWD: string;
		EDITOR: string;
		EVIDENCE_DATA_DIR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
