import { Request, Response } from 'express';
import * as OWL from 'overwatchleague';
import { OwlStandings } from './owl-standings.model'
export class OwlStandingsController{

  public owlStandings: OwlStandings = new OwlStandings();

  public getStandings (req: Request, res: Response) {   
    const owl: OWL = new OWL();

    owl.getStandings().then(response => {
      res.json(this.owlStandings.fromJSON(response.data));
    })


  }
}
