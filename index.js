const jsonServer = require('json-server')
const express = require('express')

const server = express();
//const server = jsonServer.create(); // Crea un servidor usando json-server

const router = jsonServer.router("db.json"); // Base de datos JSON
const middlewares = jsonServer.defaults();

const API_KEY = "123456";

// Middleware para validar la API Key
server.use((req, res, next) => {
  const userApiKey = req.header("x-api-key"); // Leer la API Key del encabezado

  if (!userApiKey || userApiKey !== API_KEY) {
    return res.status(401).json({ error: "Acceso no autorizado. API Key inválida." });
  }
  next(); // Si la API Key es válida, continuar
});

server.use(express.json()); // Habilitar JSON en las solicitudes
server.use(middlewares);
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ Servidor JSON corriendo en http://localhost:${PORT}`);
});
