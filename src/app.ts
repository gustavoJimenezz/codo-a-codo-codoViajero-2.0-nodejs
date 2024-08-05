import express from 'express';
import {Application, Request, Response } from 'express';
import path from 'path';

class App {
  public app: Application;
  private port: number;

  constructor(port:number){
    this.app = express();
    this.port = port;

    this.setViewEngine();
    this.setStaticFiles();
    this.setRoutes();
  }

  private setViewEngine(): void {
    this.app.set('views', path.resolve(__dirname, '../views')); // 'dist' está un nivel debajo de 'src'
    this.app.set('view engine', 'pug');
    this.app.locals.basedir = this.app.get('views');
  }

  private setStaticFiles(): void {
    this.app.use(express.static(path.resolve(__dirname, '../public')));
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