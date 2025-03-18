# Json Server - Ejemplo con API Key
Pequeño proyecto para crear APIs simuladas con header API Key requerido.

## Requisitos
Tener instalado NodeJS v20.12.2, version LTS.

## Instalacion
Ejecutar el siguiente comando:
```bash
npm install
```

## Uso
```bash
npm start
```

En caso de que se quiera testear las API sin el header **API Key**
```bash
npm test

ó

npm run solo-server
```

### Ejemplos
Se aconseja  instalar extension **REST Client** de **Huachao Maoh** en Visual Studio Code.  
Mirar el archivo [http.rest](/http.rest) y probar con **REST Client** o Postman.

### Ajustes
Puedes cambiar la API Key en el archivo [index.js](/index.js), en la linea 10.

```javascript
const API_KEY = "123456";
```


## Notas adicionales

### Opcional instalacion de json server
No es necesario realizar este paso, por lo que ya esta especificado como dependencia en el package.json 
```bash
npm install json-server@0.17.4
```

### Opcional instalacion de json server Global
En caso de que se quiera probar Json Server fuera de este proyecto, o de forma global, ejecutar el siguiente comando, se requeria crear manualmente el archivo **db.json** que contenga la estructura json. Ver en https://www.npmjs.com/package/json-server

```bash
npm install -g json-server@0.17.4
```

Archivo ejemplo de db.json:
```javascript
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

Ejecutar Json Server
```bash
json-server --watch db.json --port 3000
```

### Endpoints:
- http://localhost:3000/posts
- http://localhost:3000/comments
- http://localhost:3000/profile


## Contacto
Email: uzzielchaidez@gmail.com