import { Request, Response } from 'express';
import * as ExtReq from 'request'
import * as mongoose from "mongoose";



export class OwlMatchStatsController {

  constructor() {
    const Schema = mongoose.Schema;
    mongoose.connect("mongodb://pujan:pujan123@ds249311.mlab.com:49311/owlapp", function(err, db) {
       const collection = db.collection('matches');
    });
  }


  
  public getMatchStats(req: Request, res: Response) {

    this.collection.find({game_number: 4},(kittens) =>  {
      res.send(kittens);
    }); 
    
      // mongoose.connect("mongodb://pujan:pujan123@ds249311.mlab.com:49311/owlapp", function(err, db) {
      //   console.log(db);
      //   const collection = db.collection('matches');
      //     collection.find({game_number: 4},(kittens) =>  {
      //         res.send(kittens);
      //     }); 
      // })

   }
}

