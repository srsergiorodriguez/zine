import { p as projectMetadata } from "../../../chunks/metadata.js";
async function load({ params }) {
  return {
    projectMetadata
  };
}
const prerender = true;
export {
  load,
  prerender
};
