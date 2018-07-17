import { map } from 'lodash'
import { OwlStage } from './owl-stage.model'

export type Title = string;
export class OwlStages {

  public title: Title;
  public stages: any;

  public fromJSON(json): OwlStages {

    const owlStages = new OwlStages();
    const owlStage = new OwlStage();

    owlStages.stages = map(json, owlStage.fromJSON) || 'unknown';

    return owlStages;
  }                    
}
