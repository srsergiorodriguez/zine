import { p as projectMetadata } from "../../../../chunks/metadata.js";
async function load({ params }) {
  const itemMetadata = projectMetadata.find((d) => d.pid === params.id);
  return {
    itemMetadata
  };
}
const prerender = true;
export {
  load,
  prerender
};
