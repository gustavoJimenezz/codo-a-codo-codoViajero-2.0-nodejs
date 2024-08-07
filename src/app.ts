import express from 'express';
import {Application, Request, Response, Router} from 'express';
import path from 'path';
import './models/TravelPackage'

class App {
  public app: Application;
  private port: number;
  private travelPackgesRoute:Router;

  constructor(port:number){
    this.app = express();
    this.port = port;
    this.travelPackgesRoute = require('./routes/TravelPackageRoutes')

    this.setMiddlewares();
    this.setViewEngine();
    this.setStaticFiles();
    this.setRoutes();
    this.setStaticRoutes();
  }

  private setMiddlewares(): void {
    this.app.use(express.json()); // Middleware para parsear JSON
  }

  private setViewEngine(): void {
    this.app.set('views', path.resolve(__dirname, '../views')); 
    this.app.set('view engine', 'pug');
    this.app.locals.basedir = this.app.get('views');
  }

  private setStaticFiles(): void {
    this.app.use(express.static(path.resolve(__dirname, '../public')));
  }

  private setStaticRoutes(): void {
    this.app.use('/travelPackages', this.travelPackgesRoute);
  }

  private setRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.render('index', { title: 'Inicio' });
    });

  }

  public start(port:number): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}


export default App;