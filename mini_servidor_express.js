// Mini Servidor Express: Crear un servidor Express básico que responda "Hello World" en la ruta principal.

const express = require('express');

const app = express();

app.get('/hello_world', (req, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
    console.log(`Servidor iniciado en http://localhost:3000`);
});
