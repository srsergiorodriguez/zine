import { c as create_ssr_component, f as compute_rest_props, b as each, v as validate_component, m as missing_component, e as escape, g as getContext, d as add_attribute, h as createEventDispatcher, s as setContext } from "./ssr.js";
import { Slugger, Lexer } from "marked";
function supressWarnings() {
  const origWarn = console.warn;
  console.warn = (message) => {
    if (message.includes("unknown prop"))
      return;
    if (message.includes("unexpected slot"))
      return;
    origWarn(message);
  };
}
const Parser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "tokens", "header", "rows", "ordered", "renderers"]);
  let { type = void 0 } = $$props;
  let { tokens = void 0 } = $$props;
  let { header = void 0 } = $$props;
  let { rows = void 0 } = $$props;
  let { ordered = false } = $$props;
  let { renderers } = $$props;
  supressWarnings();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
    $$bindings.tokens(tokens);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  return `${!type ? `${each(tokens, (token) => {
    return `${validate_component(Parser, "svelte:self").$$render($$result, Object.assign({}, token, { renderers }), {}, {})}`;
  })}` : `${renderers[type] ? `${type === "table" ? `${validate_component(renderers.table || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(renderers.tablehead || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
            default: () => {
              return `${each(header, (headerItem, i) => {
                return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render(
                  $$result,
                  {
                    header: true,
                    align: $$restProps.align[i] || "center"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: headerItem.tokens, renderers }, {}, {})} `;
                    }
                  }
                )}`;
              })}`;
            }
          })}`;
        }
      })} ${validate_component(renderers.tablebody || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${each(rows, (row) => {
            return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
              default: () => {
                return `${each(row, (cells, i) => {
                  return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render(
                    $$result,
                    {
                      header: false,
                      align: $$restProps.align[i] || "center"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: cells.tokens, renderers }, {}, {})} `;
                      }
                    }
                  )}`;
                })} `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}` : `${type === "list" ? `${ordered ? `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({}, { ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.orderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign({}, item), {}, {
          default: () => {
            return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})} `;
          }
        })}`;
      })}`;
    }
  })}` : `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({}, { ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.unorderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign({}, item), {}, {
          default: () => {
            return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})} `;
          }
        })}`;
      })}`;
    }
  })}`}` : `${validate_component(renderers[type] || missing_component, "svelte:component").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `${tokens ? `${validate_component(Parser, "svelte:self").$$render($$result, { tokens, renderers }, {}, {})}` : `${escape($$restProps.raw)}`}`;
    }
  })}`}`}` : ``}`}`;
});
const key = {};
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let { depth } = $$props;
  let { raw } = $$props;
  let { text } = $$props;
  const { slug, getOptions } = getContext(key);
  const options = getOptions();
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0)
    $$bindings.depth(depth);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  id = options.headerIds ? options.headerPrefix + slug(text) : void 0;
  return `${depth === 1 ? `<h1${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${depth === 2 ? `<h2${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${depth === 3 ? `<h3${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${depth === 4 ? `<h4${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${depth === 5 ? `<h5${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h5>` : `${depth === 6 ? `<h6${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h6>` : `${escape(raw)}`}`}`}`}`}`}`;
});
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>${slots.default ? slots.default({}) : ``}</p>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { raw } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `${slots.default ? slots.default({}) : ``}`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  let { text = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<img${add_attribute("src", href, 0)}${add_attribute("title", title, 0)}${add_attribute("alt", text, 0)}>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<a${add_attribute("href", href, 0)}${add_attribute("title", title, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Em = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<em>${slots.default ? slots.default({}) : ``}</em>`;
});
const Del = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<del>${slots.default ? slots.default({}) : ``}</del>`;
});
const Codespan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { raw } = $$props;
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `<code>${escape(raw.replace(/`/g, ""))}</code>`;
});
const Strong = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<strong>${slots.default ? slots.default({}) : ``}</strong>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<table>${slots.default ? slots.default({}) : ``}</table>`;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<thead>${slots.default ? slots.default({}) : ``}</thead>`;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tbody>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tr>${slots.default ? slots.default({}) : ``}</tr>`;
});
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { align } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  return `${header ? `<th${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</th>` : `<td${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</td>`}`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ordered } = $$props;
  let { start } = $$props;
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  return `${ordered ? `<ol${add_attribute("start", start, 0)}>${slots.default ? slots.default({}) : ``}</ol>` : `<ul>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li>${slots.default ? slots.default({}) : ``}</li>`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<hr>`;
});
const Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
});
const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<blockquote>${slots.default ? slots.default({}) : ``}</blockquote>`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  let { text } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<pre${add_attribute("class", lang, 0)}><code>${escape(text)}</code></pre>`;
});
const Br = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<br>${slots.default ? slots.default({}) : ``}`;
});
const defaultRenderers = {
  heading: Heading,
  paragraph: Paragraph,
  text: Text,
  image: Image,
  link: Link,
  em: Em,
  strong: Strong,
  codespan: Codespan,
  del: Del,
  table: Table,
  tablehead: TableHead,
  tablebody: TableBody,
  tablerow: TableRow,
  tablecell: TableCell,
  list: List,
  orderedlistitem: null,
  unorderedlistitem: null,
  listitem: ListItem,
  hr: Hr,
  html: Html,
  blockquote: Blockquote,
  code: Code,
  br: Br
};
const defaultOptions = {
  baseUrl: null,
  breaks: false,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: true,
  pedantic: false,
  renderer: null,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  xhtml: false
};
const SvelteMarkdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let preprocessed;
  let slugger;
  let combinedOptions;
  let combinedRenderers;
  let { source = [] } = $$props;
  let { renderers = {} } = $$props;
  let { options = {} } = $$props;
  let { isInline = false } = $$props;
  const dispatch = createEventDispatcher();
  let tokens;
  let lexer;
  setContext(key, {
    slug: (val) => slugger ? slugger.slug(val) : "",
    getOptions: () => combinedOptions
  });
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0)
    $$bindings.isInline(isInline);
  preprocessed = Array.isArray(source);
  slugger = source ? new Slugger() : void 0;
  combinedOptions = { ...defaultOptions, ...options };
  {
    if (preprocessed) {
      tokens = source;
    } else {
      lexer = new Lexer(combinedOptions);
      tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source);
      dispatch("parsed", { tokens });
    }
  }
  combinedRenderers = { ...defaultRenderers, ...renderers };
  return `${validate_component(Parser, "Parser").$$render($$result, { tokens, renderers: combinedRenderers }, {}, {})}`;
});
const mdData = { "credits": { "attributes": { "name": "credits" }, "body": "# Créditos\n\nEsta colección fue creada por [Sergio Rodríguez Gómez](https://srsergiorodriguez.github.io/).\n\nBasada en la plantilla [Serie Mini](https://github.com/srsergiorodriguez/serie-mini), para la creación de colecciones digitales, creada por [Sergio Rodríguez Gómez](https://srsergiorodriguez.github.io/).", "bodyBegin": 5, "frontmatter": "name: credits" }, "explore": { "attributes": { "name": "explore", "galleryFilters": ["fecha", "autores", "pais", "medio_impresion"] }, "body": "# Explorar\n\n<!-- La barra de búsqueda y la galería se cargan automáticamente -->", "bodyBegin": 6, "frontmatter": 'name: explore\ngalleryFilters: ["fecha", "autores", "pais", "medio_impresion"]' }, "metadata": { "attributes": { "name": "metadata" }, "body": "# Metadatos\n\nEn esta sección se encuentran los metadatos de la colección. Pueden descargarse y usarse libremente.\n\n## Protocolo\n\nEste es el protocolo que especifica la construcción de los datos de la colección:\n\n| Dato                | Descripción                                                                            |  Tipo      |\n|---                  |---                                                                                     |---         |\n| pid                 | Identificador único                                                                    | id         |\n| label               | Nombre de la obra. Iniciales con mayúsculas                                            | texto      |\n| autores             | Autores de la obra separados por comas. Iniciales con mayúsculas, incluir acentos      | categórico |\n| descripcion         | Descripción corta de la obra                                                           | texto      |\n| grupo               | Grupo o colectivo que produjo o editó la obra                                          | categórico |\n| editores            | Editores de la obra separados por comas. Iniciales con mayúsculas, incluir acentos     | categórico |\n| fecha               | Año de publicación. Escrito en número completo (Ej. 1990)                              | ordinal    |\n| ciudad              | Ciudad de publicación. Iniciales con mayúsculas, incluir acentos                       | categórico |\n| conseguido          | Forma de adquisición de la obra. (Ej. regalo, compra, intercambio y persona o lugar)   | texto      |\n| tipo_principal      | Tipo de contenido principal: (Ilustración, Texto, Cómic Fotografía)                    | categórico |\n| nota                | Información adicional                                                                  | texto      |\n| medio_impresion     | Medio de impresión principal: (Offset, Digital, Fotocopia, Risografía, Tipos Móviles)  | categórico |\n| intervencion_manual | ¿Tiene la obra algún tipo de intervención manual?: (sí, no)                            | categórico |\n| portada_color       | ¿Tiene la obra portada full color, duotono o monotono?: (full, duo, tri, no)           | categórico |\n| portada_especial    | ¿Usa la portada una técnica de impresión diferente al contenido?: (No o especificar)   | categórico |\n| internas_color      | ¿Tienen la páginas internas full color, duotono o monotono?: (full, duo, tri, no)      | categórico |\n| papel_portada_color | ¿Tiene la portada un papel de color diferente al blanco?: (sí, no)                     | categórico |\n| compaginado         | Formato de compaginación: (Cuadernillo, Periódico, Ruanita, Plegable)                  | categórico |\n\n<!-- La tabla de metadatos se carga automáticamente -->", "bodyBegin": 5, "frontmatter": "name: metadata" }, "home": { "attributes": { "name": "home" }, "body": '### ¿Qué es esto?\n\nArchivo digital personal de zines y otras publicaciones alternativas\n\n### ¿Y eso qué quiere decir?\n\nEs un archivo digital porque contiene reproducciones digitalizadas de piezas físicas existentes en un archivo y metadatos que acompañan y dan sentido a esas reproducciones. Esos metadatos pueden servir para ver distintos aspectos de las obras y encontrar patrones comúnes: autores, fechas, ciudades, medios de reproducción, decisiones formales, etc.\n\nConcretamente, es un archivo de zines, es decir, publicaciones autogestionadas, de tiraje corto, normalmente reproducidas por medios no industriales como fotocopias, risografía, serigrafía o interveciones manuales, que suele tener contenidos de nichos específicos: ilustración, poesía, cómic, temas relacionados con un *fandom* (fanzines). La colección también inclye otras publicaciones que, tal vez, no encajan dentro de la categoría de zine, pero que guardan un cierto espíritu alternativo a formas de publicación masificada o con fines principalmente comerciales.\n\n<p>Y es personal porque es una colección subjetiva construida por una sola persona a lo largo de los años: yo, <a href="https://srsergiorodriguez.github.io/" target="_blank">Sergio Rodríguez Gómez</a>. Este archivo surgió con el interés de sistematizar digitalmente los zines que he conseguido en ferias y tiendas, que he comprado o me han obsequiado sus autores, que yo mismo he hecho, o que me han regalado personas que aprecio. Como es personal, la colección corresponde a mi gusto y no pretende ser exhaustiva o estar libre de sesgos</p>\n\n### ¿Cómo se construyó este archivo?\n\n<p>Este archivo fue construido con <a href="https://github.com/srsergiorodriguez/serie-mini" target="_blank">Serie Mini</a>, un sistema para la producción de colecciones digitales bajo los principios de la computación mínima, es decir, procurando las infraestructuras digitales más sencillas y sostenibles posibles.</p>\n\nEl archivo contiene principalmente reproducciones digitalizadas de las portadas de los zines y otros metadatos, además de ensayos interactivos curados sobre aspectos de la colección. El archivo se puede navegar de varias formas, como se ve en el menú de la barra superior: navegando la colección a través de filtros, buscando términos concretos, o visitando las curadurías temáticas.', "bodyBegin": 5, "frontmatter": "name: home" }, "tour": { "attributes": { "name": "tour" }, "body": '# Recorrido por la colección\n\nEsta colección de muestra recopila varias imágenes con representaciones alegóricas de América hechas tomadas de [Rijksstudio](https://www.rijksmuseum.nl/en), la colección digital del Rijks Museum de Países Bajos. Todas las imágenes usadas están en el dominio público.\n\nUsa este archivo para incluir contenido que permita hacer un recorrido por la colección ![TEST](!elefantesyji_lp4ufc0677).\n\nPara poner una imagen correspondiente a un ítem de la colección en este recorrido, usa el formato convencional de Markdown con el que se insertan imágenes: `![TEXTO ALTERNATIVO](URL)`, pero, en vez de poner la url, pon el pid de la imagen precedido por un signo de interrogación. Por ejemplo: `![TEST](!AdriaenCollaert)`. Así se mostrará una imagen que, si se cliquea, te llevará al elemento de la colección correspondiente.\n\nAsí:\n\n![TEST](!elefantesyji_lp4ufc0677)\n\nPuedes usar urls de imágenes externas con normalidad en el formato Markdown si no sigues esta convención.\n\nSi quieres poner una imagen concreta de un ítem con varias imágenes (por defecto se mostrará la primera), justo después del pid debes poner el símbolo `|` y el número correspondiente a la imagen empezando en el orden en que se ve en tu carpeta. Así, por ejemplo, para ver la imagen dos, debes hacer algo como esto `![TEST](!AdriaenCollaert|2)`.\n\nTambién pudes agregar un texto que aparecerá al interior de la tarjeta, debajo del título, siguiendo esta convención:  `![TEXTO ALTERNATIVO](!PID "TEXTO ADICIONAL")`.', "bodyBegin": 5, "frontmatter": "name: tour" } };
export {
  SvelteMarkdown as S,
  mdData as m
};
