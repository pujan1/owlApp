import { Request, Response } from 'express';
import * as ExtReq from 'request'

export class OwlMatchStatsController {
  public getMatchStats(req: Request, res: Response) {

    ExtReq.get(' https://api.overwatchleague.com/stats/matches/'+ req.params.id +'/maps/' + req.params.number, (error, response, body) => {

      const data = JSON.parse(body)
      res.json(data);
    }) 
   }
}

