const express = require('express');
const path = require('path');

const app = express();

// Configurar el motor de vistas Pug
app.set('views', path.join(__dirname, 'views'));  // Establece la carpeta de vistas
app.set('view engine', 'pug');                    // Establece Pug como motor de vistas

// Middleware para manejar las vistas Pug con base en la carpeta de vistas
app.use(express.static(path.join(__dirname, 'public'))); // Ajusta según necesites
// app.use(express.static(path.join(__dirname, 'src'))); // Ajusta según necesites

// Configuración adicional para el manejo de rutas absolutas en Pug
app.locals.basedir = app.get('views');

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' });
});

// Escucha en un puerto
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
