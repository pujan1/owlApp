
import { map } from 'lodash'
import { OwlMatch } from './owl-match.model'

export type Title = string;
export type Slug = string

export class OwlStage {

  public title: Title;
  public slug: Slug;
  public matches: OwlMatch[] = [];

  public fromJSON(json): OwlStage {

    const stage = new OwlStage();
    const match = new OwlMatch();

    stage.title = json.name;
    stage.slug = json.slug;
    stage.matches = map(json.matches, match.fromJSON)

    return stage;

  }
}