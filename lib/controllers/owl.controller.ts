
import { Request, Response } from 'express';
import * as OWL from 'overwatchleague';
export class StandingsController{

  public getStanding (req: Request, res: Response) {   
    const owl: OWL = new OWL();
    
    owl.getStandings().then(response => {
      res.json(response.data);
    })
  }
}
