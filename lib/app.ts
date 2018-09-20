import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/owl.routing";
//import * as mysql from 'mysql';


class App {

  public app: express.Application;
  public route: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();  
    this.route.routes(this.app);
    //this.configureSQL();      
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static(__dirname+'/dist'));
  }

  // private configureSQL(): void{
  //   let connection = mysql.createConnection({
  //     host: '35.226.98.99',
  //     user: 'pujan',
  //     database: 'owlapp',
  //     password: 'pujan123'
  //   });

  //   connection.connect( (err) => {
  //     if (err) console.error('Error connecting: ' + err.stack);
  //     console.log('Connected as thread id: ' + connection.threadId);
  //   });
  // }
}

export default new App().app;