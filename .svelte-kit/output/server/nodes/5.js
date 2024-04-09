import * as universal from '../entries/pages/pages/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/pages/+page.js";
export const imports = ["_app/immutable/nodes/5.BpTEfuAR.js","_app/immutable/chunks/metadata.IaIeJ9MW.js","_app/immutable/chunks/scheduler.DTRRIkUf.js","_app/immutable/chunks/index.D5Z0Kk_0.js","_app/immutable/chunks/Page.SS64m1PK.js","_app/immutable/chunks/Footer.C5DpeZKL.js","_app/immutable/chunks/paths.Bvk1YviU.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/helpers.C8goa5Ji.js","_app/immutable/chunks/md.CBtt97PS.js"];
export const stylesheets = ["_app/immutable/assets/5.BIQ-qQxD.css","_app/immutable/assets/Footer.WiMRCuZE.css"];
export const fonts = [];
