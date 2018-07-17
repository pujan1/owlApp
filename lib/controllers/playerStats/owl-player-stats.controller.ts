import { Request, Response } from 'express';
import * as ExtReq from 'request'

export class OwlPlayerStatsController {
  public getMatchStats(req: Request, res: Response) {

    ExtReq.get('https://api.overwatchleague.com/stats/players?season_id=' + req.params.id, (error, response, body) => {

      const data = JSON.parse(body)
      res.json(data);
    }) 
   }

}