import { OwlTeamRecords } from './owl-team-records.model'

export type Name = string;
export type PrimaryColor = string;
export type SecondaryColor = string;
export type Logo = string;
export type Placement = number

export class OwlTeam {

  public name: Name;
  public primaryColor: PrimaryColor;
  public secondaryColor: SecondaryColor;
  public logo: Logo;
  public placement: Placement;
  public records: any;

  public fromJSON(json): OwlTeam {

    const standing = new OwlTeam();
    const records = new OwlTeamRecords();

    standing.name = json.competitor.name;
    standing.primaryColor = json.competitor.primaryColor;
    standing.secondaryColor = json.competitor.secondaryColor;
    standing.logo = json.competitor.logo;
    standing.placement = json.placement;
    standing.records = records.fromJSON(json.records[0]);


    return standing;

  }
}