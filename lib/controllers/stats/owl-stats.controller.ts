import { Request, Response } from 'express';
import * as mongoose from "mongoose";

export class OwlStatsController {

  public getStats(req: Request, res: Response) {
    
      mongoose.connect("mongodb://pujan:pujan123@ds249311.mlab.com:49311/owlapp", function(err, db) {
        db.collection('hero_stats').find({"esports_match_id": 10525}).toArray((err, docs) => {
          res.send(docs);
        }); 
      });
   }
}

