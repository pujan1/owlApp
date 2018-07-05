import { Request, Response } from 'express';
import * as OWL from 'overwatchleague';
export class OwlScheduleController{

  public getSchedule (req: Request, res: Response) {   
    const owl: OWL = new OWL();

    owl.getSchedule().then(response => {
      res.json(response.data.data.stages[1]);
    });
  }
}
