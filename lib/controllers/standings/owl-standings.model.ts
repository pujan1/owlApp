import { map } from 'lodash'
import { OwlTeamStanding } from "./owl-team-standing.model";

export type Title = string;
export class OwlStandings {

  public title: Title;
  public overallStandings: OwlTeamStanding[] = []

  public fromJSON(json): OwlStandings {

    const standings = new OwlStandings();
    const teamStanding = new OwlTeamStanding();

    standings.title = 'Standings';
    standings.overallStandings = map(json.ranks, teamStanding.fromJSON)

    return standings;
  }                    
}
