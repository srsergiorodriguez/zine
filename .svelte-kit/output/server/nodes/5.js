import * as universal from '../entries/pages/pages/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/pages/+page.js";
export const imports = ["_app/immutable/nodes/5.B5AhBMJf.js","_app/immutable/chunks/metadata.IaIeJ9MW.js","_app/immutable/chunks/scheduler.DTRRIkUf.js","_app/immutable/chunks/index.D5Z0Kk_0.js","_app/immutable/chunks/Page.Y3fEYlTm.js","_app/immutable/chunks/Footer.Dke4pFpZ.js","_app/immutable/chunks/paths.BDEuS_jX.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/helpers.C8goa5Ji.js","_app/immutable/chunks/md.CBsvUm-m.js"];
export const stylesheets = ["_app/immutable/assets/5.BIQ-qQxD.css","_app/immutable/assets/Footer.BuFW2Fd6.css"];
export const fonts = [];
