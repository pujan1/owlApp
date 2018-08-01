import { Request, Response } from 'express';
import * as ExtReq from 'request'
import * as mongoose from "mongoose";


export class OwlMatchStatsController {
  public getMatchStats(req: Request, res: Response) {

    //ExtReq.get(' https://api.overwatchleague.com/stats/matches/'+ req.params.id +'/maps/' + req.params.number, (error, response, body) => {

      //const data = JSON.parse(body)
     // res.json(data);

      mongoose.connect("mongodb://pujan:pujan123@ds249311.mlab.com:49311/owlapp", function(err, db) {
        const collection = db.collection('matches');

          collection.find().toArray(function(err, kittens) {
              console.log('kittens', kittens[0].game_number);
          });    
      });
    //}) 
   }
}

