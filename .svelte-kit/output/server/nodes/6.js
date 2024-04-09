import * as universal from '../entries/pages/pages/_id_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pages/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/pages/[id]/+page.js";
export const imports = ["_app/immutable/nodes/6.9DdXX27f.js","_app/immutable/chunks/metadata.IaIeJ9MW.js","_app/immutable/chunks/scheduler.DTRRIkUf.js","_app/immutable/chunks/index.D5Z0Kk_0.js","_app/immutable/chunks/Page.Y3fEYlTm.js","_app/immutable/chunks/Footer.Dke4pFpZ.js","_app/immutable/chunks/paths.BDEuS_jX.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/helpers.C8goa5Ji.js"];
export const stylesheets = ["_app/immutable/assets/6.Cnlniacm.css","_app/immutable/assets/Footer.BuFW2Fd6.css"];
export const fonts = [];
