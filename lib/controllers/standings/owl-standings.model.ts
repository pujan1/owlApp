import { map } from 'lodash'
import { OwlTeam } from "../models/owl-team.model";

export type Title = string;
export class OwlStandings {

  public title: Title;
  public overallStandings: OwlTeam[] = []

  public fromJSON(json): OwlStandings {

    const standings = new OwlStandings();
    const standing = new OwlTeam();

    standings.title = 'Standings';
    standings.overallStandings = map(json.ranks, standing.fromJSON)

    return standings;
  }                    
}
