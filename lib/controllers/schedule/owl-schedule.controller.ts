import { Request, Response } from 'express';
import * as OWL from 'overwatchleague';
import { OwlStages } from './owl-stages.model';

export class OwlScheduleController{

  public getSchedule (req: Request, res: Response) {   
    const owl: OWL = new OWL();
    const owlStages: OwlStages = new OwlStages();

    owl.getSchedule().then(response => {
      const schedule = owlStages.fromJSON(response.data.data.stages)


      res.json(schedule);
    });
  }
}
