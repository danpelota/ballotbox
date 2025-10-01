import * as universal from '../entries/pages/explore/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/explore/+layout.js";
export const imports = ["_app/immutable/nodes/2.Dyjq7s8T.js","_app/immutable/chunks/index.rV6zwFgL.js","_app/immutable/nodes/3.DDpY1u9B.js","_app/immutable/chunks/scheduler.C5a5hvA0.js","_app/immutable/chunks/index.FKm0evoM.js"];
export const stylesheets = [];
export const fonts = [];
