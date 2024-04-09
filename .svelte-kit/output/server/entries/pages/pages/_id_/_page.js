import { m as metadata } from "../../../../chunks/metadata.js";
async function load({ params }) {
  const itemMetadata = metadata.find((d) => d.pid === params.id);
  return {
    itemMetadata
  };
}
const prerender = true;
export {
  load,
  prerender
};
