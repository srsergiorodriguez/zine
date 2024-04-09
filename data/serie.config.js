const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://srsergiorodriguez.github.io",
  "baseurl": "/zine",
  "title": "¡Zine!",
  "subtitle": "Colección digital de zines y publicaciones alternativas",
  "credits": "Por Sergio Rodríguez Gómez",
  "copyright": "2024",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "autores",
        "label": "Autores",
        "type": "text"
      },
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text"
      },
      {
        "key": "pais",
        "label": "País",
        "type": "text"
      },
      {
        "key": "tipo_principal",
        "label": "Tipo",
        "type": "text"
      },
      {
        "key": "medio_impresion",
        "label": "Medio de impresión",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "autores",
      "grupo",
      "fecha",
      "ciudad",
      "medio_impresion"
    ]
  }
};
export default config;