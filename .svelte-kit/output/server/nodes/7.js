

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.CSQgPrMC.js","_app/immutable/chunks/scheduler.DTRRIkUf.js","_app/immutable/chunks/index.D5Z0Kk_0.js"];
export const stylesheets = [];
export const fonts = [];
