
import { Observable } from 'rxjs';
import { Request, Response } from 'express';
import * as OWL from 'overwatchleague';
export class OwlStandingsController{

  public getStanding (req: Request, res: Response) {   
    const owl: OWL = new OWL();
    
    owl.getStandings().then(response => {
      res.json(response.data);
    })
  }
}
