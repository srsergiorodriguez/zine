import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DwAQabyO.js","_app/immutable/chunks/scheduler.DTRRIkUf.js","_app/immutable/chunks/index.D5Z0Kk_0.js"];
export const stylesheets = ["_app/immutable/assets/0.y5hkYxb7.css"];
export const fonts = [];
