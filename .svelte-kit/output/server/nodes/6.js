import * as universal from '../entries/pages/pages/_id_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pages/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/pages/[id]/+page.js";
export const imports = ["_app/immutable/nodes/6.CI3umCPE.js","_app/immutable/chunks/metadata.B5lOiQd6.js","_app/immutable/chunks/scheduler.CrsDffe0.js","_app/immutable/chunks/index.DSWBlzAv.js","_app/immutable/chunks/Page.CFE2PXPC.js","_app/immutable/chunks/Footer.Dfvou4KW.js","_app/immutable/chunks/paths.DAd0bepC.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/helpers.C8goa5Ji.js"];
export const stylesheets = ["_app/immutable/assets/6.DQo1wnhr.css","_app/immutable/assets/Footer.WiMRCuZE.css"];
export const fonts = [];
