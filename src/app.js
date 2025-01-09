const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const indexRouter = require('./routes/index.routes');
const excursionRouter = require('./routes/excursions.routes');
const userRouter = require('./routes/users.routes');
const authRouter = require('./routes/auth.routes');
const detailsExcursions = require('./routes/detailsExcursions.routes');
const expressEjsLayouts = require('express-ejs-layouts');

class App {
  constructor(port) {
    this.app = express();
    this.port = port;

    this.setMiddlewares();
    this.setViewEngine();
    this.setStaticFiles();
    this.setRoutes();
  }

  setMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true })); 
    this.app.use(cookieParser());
  }

  setViewEngine() {
    this.app.set('views', path.resolve(__dirname, '../views')); 
    this.app.use(expressEjsLayouts);
    this.app.set('layout', '../views/layouts/layout.ejs');
    this.app.set('view engine', 'ejs');
    this.app.locals.basedir = this.app.get('views');
  }

  setStaticFiles() {
    this.app.use(express.static(path.resolve(__dirname, '../public')));
  }

  setRoutes() {
    this.app.use(indexRouter);
    this.app.use(excursionRouter);
    this.app.use(userRouter);
    this.app.use(authRouter);
    this.app.use(detailsExcursions);
    
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

module.exports = App;
