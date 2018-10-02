import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path"
import { Routes } from "./routes/owl.routing";
//import * as mysql from 'mysql';


class App {

  public app: express.Application;
  public route: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();  
    this.app.use('/api', this.route);
    //this.route.routes(this.app);    
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static(__dirname+'/dist'));
    // this.app.all('/*',  (req, res, next) => {
    //   // Just send the index.html for other files to support HTML5Mode
    //   res.sendFile('index.html', { root: __dirname+'/dist' });
    // });

    this.app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
  }
}

export default new App().app;