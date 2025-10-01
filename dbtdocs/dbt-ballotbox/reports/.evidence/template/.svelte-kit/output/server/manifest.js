export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "evidence/_app",
	assets: new Set(["apple-touch-icon.png","data/manifest.json","data/voter_analytics/mrt_party_registration_changes/mrt_party_registration_changes.parquet","data/voter_analytics/mrt_party_registration_changes/mrt_party_registration_changes.schema.json","data/voter_analytics/mrt_voter_counts/mrt_voter_counts.parquet","data/voter_analytics/mrt_voter_counts/mrt_voter_counts.schema.json","data/voter_analytics/mrt_voter_turnout/mrt_voter_turnout.parquet","data/voter_analytics/mrt_voter_turnout/mrt_voter_turnout.schema.json","favicon.ico","icon-192.png","icon-512.png","icon.svg"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DBa5fyvP.js","app":"_app/immutable/entry/app.BTAGuHJn.js","imports":["_app/immutable/entry/start.DBa5fyvP.js","_app/immutable/chunks/entry.-FwRyMk-.js","_app/immutable/chunks/scheduler.C5a5hvA0.js","_app/immutable/entry/app.BTAGuHJn.js","_app/immutable/chunks/preload-helper.DbJPdqyQ.js","_app/immutable/chunks/scheduler.C5a5hvA0.js","_app/immutable/chunks/index.FKm0evoM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/api/customFormattingSettings.json",
				pattern: /^\/api\/customFormattingSettings\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/customFormattingSettings.json/_server.js'))
			},
			{
				id: "/api/prerendered_queries/[query_hash].arrow",
				pattern: /^\/api\/prerendered_queries\/([^/]+?)\.arrow\/?$/,
				params: [{"name":"query_hash","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/prerendered_queries/_query_hash_.arrow/_server.js'))
			},
			{
				id: "/api/settings.json",
				pattern: /^\/api\/settings\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/settings.json/_server.js'))
			},
			{
				id: "/api/[route_hash]/[additional_hash]/all-queries.json",
				pattern: /^\/api\/([^/]+?)\/([^/]+?)\/all-queries\.json\/?$/,
				params: [{"name":"route_hash","optional":false,"rest":false,"chained":false},{"name":"additional_hash","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_route_hash_/_additional_hash_/all-queries.json/_server.js'))
			},
			{
				id: "/explore/console",
				pattern: /^\/explore\/console\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/explore/schema",
				pattern: /^\/explore\/schema\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
