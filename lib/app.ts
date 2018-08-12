import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/owl.routing";
import { OwlMatchFetch } from "./controllers/models/owl-match-fetch.model";


class App {

  public app: express.Application;
  public route: Routes = new Routes();
  public mongoURL: string = 'mongodb://pujan:pujan123@ds249311.mlab.com:49311/owlapp'

  constructor() {
    this.app = express();
    this.config();  
    this.mongoSetup();
    this.route.routes(this.app);      
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void{
  }
}

export default new App().app;