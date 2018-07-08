import { map } from 'lodash'
import { OwlStage } from './owl-stage.model'

export type Title = string;
export class OwlStages {

  public title: Title;

  public fromJSON(json): OwlStages {

    const owlStages = new OwlStages();
    const owlStage = new OwlStage();

    console.log(json)

    owlStages.title = 'Stages';

   // standings.overallStandings = map(json.ranks, standing.fromJSON)

    return owlStages;
  }                    
}
