const express = require('express');
const path = require('path');
require('./database/models/TouristDestinations');

class App {
  constructor(port) {
    this.app = express();
    this.port = port;
    this.touristDestination = require('./routes/touristDestinationRoutes');

    this.setMiddlewares();
    this.setViewEngine();
    this.setStaticFiles();
    this.setRoutes();
    this.setStaticRoutes();
  }

  setMiddlewares() {
    this.app.use(express.json()); // Middleware para parsear JSON
  }

  setViewEngine() {
    this.app.set('views', path.resolve(__dirname, '../views')); 
    this.app.set('view engine', 'pug');
    this.app.locals.basedir = this.app.get('views');
  }

  setStaticFiles() {
    this.app.use(express.static(path.resolve(__dirname, '../public')));
  }

  setStaticRoutes() {
    this.app.use('/touristDestinations', this.touristDestination);
  }

  setRoutes() {
    this.app.get('/', (req, res) => {
      res.render('index', { title: 'Inicio' });
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

module.exports = App;
