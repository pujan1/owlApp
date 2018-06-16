
import { Request, Response } from 'express';

const OverwatchLeague = require('overwatchleague');
const OWL = new OverwatchLeague();

export class StandingsController{

  

  public getStanding (req: Request, res: Response) {   
    
    OWL.getStandings().then(response => {
      console.log(response);
    })
    
      
  }
}
