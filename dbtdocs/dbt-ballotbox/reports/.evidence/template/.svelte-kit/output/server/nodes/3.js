import * as server from '../entries/pages/settings/_layout.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/pages/settings/+layout.server.js";
export const imports = ["_app/immutable/nodes/3.DDpY1u9B.js","_app/immutable/chunks/scheduler.C5a5hvA0.js","_app/immutable/chunks/index.FKm0evoM.js"];
export const stylesheets = [];
export const fonts = [];
