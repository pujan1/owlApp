import { Request, Response } from 'express';
import * as OWL from 'overwatchleague';
import { OwlStandings } from './owl-standings.model'

export class OwlStandingsController{

  public getStandings (req: Request, res: Response) {   
    const owl: OWL = new OWL();
    const owlStandings: OwlStandings = new OwlStandings();

    owl.getStandings().then(response => {
      const Standings = owlStandings.fromJSON(response.data)
      res.json(Standings);
    });
  }
}
