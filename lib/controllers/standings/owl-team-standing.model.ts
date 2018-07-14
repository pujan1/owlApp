
import { OwlTeamRecords } from '../models/owl-team-records.model'
import { OwlTeam } from '../models/owl-team.model';

export type Name = string;
export type Placement = number;


export class OwlTeamStanding {

  public placement: Placement;
  public records: OwlTeamRecords;
  public team: OwlTeam;


  public fromJSON(json): OwlTeamStanding {

    const teamStanding = new OwlTeamStanding();
    const records = new OwlTeamRecords();
    const owlTeam = new OwlTeam();

    teamStanding.placement = json.placement;
    teamStanding.records = records.fromJSON(json.records[0]);
    teamStanding.team = owlTeam.fromJSON(json.competitor);

    return teamStanding;

  }
}