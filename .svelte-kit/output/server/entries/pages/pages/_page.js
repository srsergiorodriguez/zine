import { m as metadata } from "../../../chunks/metadata.js";
async function load({ params }) {
  return {
    metadata
  };
}
const prerender = true;
export {
  load,
  prerender
};
