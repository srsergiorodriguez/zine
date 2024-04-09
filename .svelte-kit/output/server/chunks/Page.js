import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { D as Default, H as Header, C as ContentSlot, F as Footer } from "./Footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Default, "Default").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(ContentSlot, "ContentSlot").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export {
  Page as P
};
