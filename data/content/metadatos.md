---
name: metadata
---

# Metadatos

En esta sección se encuentran los metadatos de la colección. Pueden descargarse y usarse libremente.

## Protocolo

Este es el protocolo que especifica la construcción de los datos de la colección:

| Dato                | Descripción                                                                            |  Tipo      |
|---                  |---                                                                                     |---         |
| pid                 | Identificador único                                                                    | id         |
| label               | Nombre de la obra. Iniciales con mayúsculas                                            | texto      |
| autores             | Autores de la obra separados por comas. Iniciales con mayúsculas, incluir acentos      | categórico |
| descripcion         | Descripción corta de la obra                                                           | texto      |
| grupo               | Grupo o colectivo que produjo o editó la obra                                          | categórico |
| editores            | Editores de la obra separados por comas. Iniciales con mayúsculas, incluir acentos     | categórico |
| fecha               | Año de publicación. Escrito en número completo (Ej. 1990)                              | ordinal    |
| ciudad              | Ciudad de publicación. Iniciales con mayúsculas, incluir acentos                       | categórico |
| conseguido          | Forma de adquisición de la obra. (Ej. regalo, compra, intercambio y persona o lugar)   | texto      |
| tipo_principal      | Tipo de contenido principal: (Ilustración, Texto, Cómic Fotografía)                    | categórico |
| nota                | Información adicional                                                                  | texto      |
| medio_impresion     | Medio de impresión principal: (Offset, Digital, Fotocopia, Risografía, Tipos Móviles)  | categórico |
| intervencion_manual | ¿Tiene la obra algún tipo de intervención manual?: (sí, no)                            | categórico |
| portada_color       | ¿Tiene la obra portada full color, duotono o monotono?: (full, duo, tri, no)           | categórico |
| portada_especial    | ¿Usa la portada una técnica de impresión diferente al contenido?: (No o especificar)   | categórico |
| internas_color      | ¿Tienen la páginas internas full color, duotono o monotono?: (full, duo, tri, no)      | categórico |
| papel_portada_color | ¿Tiene la portada un papel de color diferente al blanco?: (sí, no)                     | categórico |
| compaginado         | Formato de compaginación: (Cuadernillo, Periódico, Ruanita, Plegable)                  | categórico |

<!-- La tabla de metadatos se carga automáticamente -->