export const mdData = {"credits":{"attributes":{"name":"credits"},"body":"# Créditos\n\nEsta colección fue creada por [Sergio Rodríguez Gómez](https://srsergiorodriguez.github.io/).\n\nBasada en la plantilla [Serie Mini](https://github.com/srsergiorodriguez/serie-mini), para la creación de colecciones digitales, creada por [Sergio Rodríguez Gómez](https://srsergiorodriguez.github.io/).","bodyBegin":5,"frontmatter":"name: credits"},"explore":{"attributes":{"name":"explore","galleryFilters":["fecha","autores","pais","medio_impresion"]},"body":"# Explorar\n\n<!-- La barra de búsqueda y la galería se cargan automáticamente -->","bodyBegin":6,"frontmatter":"name: explore\ngalleryFilters: [\"fecha\", \"autores\", \"pais\", \"medio_impresion\"]"},"metadata":{"attributes":{"name":"metadata"},"body":"# Metadatos\n\nEn esta sección se encuentran los metadatos de la colección. Pueden descargarse y usarse libremente.\n\n## Protocolo\n\nEste es el protocolo que especifica la construcción de los datos de la colección:\n\n| Dato                | Descripción                                                                            |  Tipo      |\n|---                  |---                                                                                     |---         |\n| pid                 | Identificador único                                                                    | id         |\n| label               | Nombre de la obra. Iniciales con mayúsculas                                            | texto      |\n| autores             | Autores de la obra separados por comas. Iniciales con mayúsculas, incluir acentos      | categórico |\n| descripcion         | Descripción corta de la obra                                                           | texto      |\n| grupo               | Grupo o colectivo que produjo o editó la obra                                          | categórico |\n| editores            | Editores de la obra separados por comas. Iniciales con mayúsculas, incluir acentos     | categórico |\n| fecha               | Año de publicación. Escrito en número completo (Ej. 1990)                              | ordinal    |\n| ciudad              | Ciudad de publicación. Iniciales con mayúsculas, incluir acentos                       | categórico |\n| conseguido          | Forma de adquisición de la obra. (Ej. regalo, compra, intercambio y persona o lugar)   | texto      |\n| tipo_principal      | Tipo de contenido principal: (Ilustración, Texto, Cómic Fotografía)                    | categórico |\n| nota                | Información adicional                                                                  | texto      |\n| medio_impresion     | Medio de impresión principal: (Offset, Digital, Fotocopia, Risografía, Tipos Móviles)  | categórico |\n| intervencion_manual | ¿Tiene la obra algún tipo de intervención manual?: (sí, no)                            | categórico |\n| portada_color       | ¿Tiene la obra portada full color, duotono o monotono?: (full, duo, tri, no)           | categórico |\n| portada_especial    | ¿Usa la portada una técnica de impresión diferente al contenido?: (No o especificar)   | categórico |\n| internas_color      | ¿Tienen la páginas internas full color, duotono o monotono?: (full, duo, tri, no)      | categórico |\n| papel_portada_color | ¿Tiene la portada un papel de color diferente al blanco?: (sí, no)                     | categórico |\n| compaginado         | Formato de compaginación: (Cuadernillo, Periódico, Ruanita, Plegable)                  | categórico |\n\n<!-- La tabla de metadatos se carga automáticamente -->","bodyBegin":5,"frontmatter":"name: metadata"},"home":{"attributes":{"name":"home"},"body":"### ¿Qué es esto?\n\nArchivo digital personal de zines y otras publicaciones alternativas\n\n### ¿Y eso qué quiere decir?\n\nEs un archivo digital porque contiene reproducciones digitalizadas de piezas físicas existentes en un archivo y metadatos que acompañan y dan sentido a esas reproducciones. Esos metadatos pueden servir para ver distintos aspectos de las obras y encontrar patrones comúnes: autores, fechas, ciudades, medios de reproducción, decisiones formales, etc.\n\nConcretamente, es un archivo de zines, es decir, publicaciones autogestionadas, de tiraje corto, normalmente reproducidas por medios no industriales como fotocopias, risografía, serigrafía o interveciones manuales, que suele tener contenidos de nichos específicos: ilustración, poesía, cómic, temas relacionados con un *fandom* (fanzines). La colección también inclye otras publicaciones que, tal vez, no encajan dentro de la categoría de zine, pero que guardan un cierto espíritu alternativo a formas de publicación masificada o con fines principalmente comerciales.\n\n<p>Y es personal porque es una colección subjetiva construida por una sola persona a lo largo de los años: yo, <a href=\"https://srsergiorodriguez.github.io/\" target=\"_blank\">Sergio Rodríguez Gómez</a>. Este archivo surgió con el interés de sistematizar digitalmente los zines que he conseguido en ferias y tiendas, que he comprado o me han obsequiado sus autores, que yo mismo he hecho, o que me han regalado personas que aprecio. Como es personal, la colección corresponde a mi gusto y no pretende ser exhaustiva o estar libre de sesgos</p>\n\n### ¿Cómo se construyó este archivo?\n\n<p>Este archivo fue construido con <a href=\"https://github.com/srsergiorodriguez/serie-mini\" target=\"_blank\">Serie Mini</a>, un sistema para la producción de colecciones digitales bajo los principios de la computación mínima, es decir, procurando las infraestructuras digitales más sencillas y sostenibles posibles.</p>\n\nEl archivo contiene principalmente reproducciones digitalizadas de las portadas de los zines y otros metadatos, además de ensayos interactivos curados sobre aspectos de la colección. El archivo se puede navegar de varias formas, como se ve en el menú de la barra superior: navegando la colección a través de filtros, buscando términos concretos, o visitando las curadurías temáticas.","bodyBegin":5,"frontmatter":"name: home"},"tour":{"attributes":{"name":"tour"},"body":"# Recorrido por la colección\n\nEsta colección de muestra recopila varias imágenes con representaciones alegóricas de América hechas tomadas de [Rijksstudio](https://www.rijksmuseum.nl/en), la colección digital del Rijks Museum de Países Bajos. Todas las imágenes usadas están en el dominio público.\n\nUsa este archivo para incluir contenido que permita hacer un recorrido por la colección ![TEST](!elefantesyji_lp4ufc0677).\n\nPara poner una imagen correspondiente a un ítem de la colección en este recorrido, usa el formato convencional de Markdown con el que se insertan imágenes: `![TEXTO ALTERNATIVO](URL)`, pero, en vez de poner la url, pon el pid de la imagen precedido por un signo de interrogación. Por ejemplo: `![TEST](!AdriaenCollaert)`. Así se mostrará una imagen que, si se cliquea, te llevará al elemento de la colección correspondiente.\n\nAsí:\n\n![TEST](!elefantesyji_lp4ufc0677)\n\nPuedes usar urls de imágenes externas con normalidad en el formato Markdown si no sigues esta convención.\n\nSi quieres poner una imagen concreta de un ítem con varias imágenes (por defecto se mostrará la primera), justo después del pid debes poner el símbolo `|` y el número correspondiente a la imagen empezando en el orden en que se ve en tu carpeta. Así, por ejemplo, para ver la imagen dos, debes hacer algo como esto `![TEST](!AdriaenCollaert|2)`.\n\nTambién pudes agregar un texto que aparecerá al interior de la tarjeta, debajo del título, siguiendo esta convención:  `![TEXTO ALTERNATIVO](!PID \"TEXTO ADICIONAL\")`.","bodyBegin":5,"frontmatter":"name: tour"}};