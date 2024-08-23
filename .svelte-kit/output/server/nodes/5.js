import * as universal from '../entries/pages/pages/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pages/_page.svx.js')).default;
export { universal };
export const universal_id = "src/routes/pages/+page.js";
export const imports = ["_app/immutable/nodes/5.DNBfAkfz.js","_app/immutable/chunks/metadata.B5lOiQd6.js","_app/immutable/chunks/scheduler.CrsDffe0.js","_app/immutable/chunks/index.DSWBlzAv.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Page.CFE2PXPC.js","_app/immutable/chunks/Footer.Dfvou4KW.js","_app/immutable/chunks/paths.DAd0bepC.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/index.B3vy_Lio.js","_app/immutable/chunks/helpers.C8goa5Ji.js"];
export const stylesheets = ["_app/immutable/assets/5.Br3cKwP4.css","_app/immutable/assets/Footer.WiMRCuZE.css"];
export const fonts = [];
