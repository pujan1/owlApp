import { Request, Response } from 'express';
import * as mongoose from "mongoose";

export class OwlMatchStatsController {

  public getMatchStats(req: Request, res: Response) {
    
      mongoose.connect("mongodb://pujan:pujan123@ds249311.mlab.com:49311/owlapp", function(err, db) {
        db.collection('matches').find({}).toArray((err, docs) => {
          res.send(docs);
        }); 
      });
   }
}

