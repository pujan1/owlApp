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

    console.log('json', json);

    standing.name = json.name;
    standing.primaryColor = json.primaryColor;
    standing.secondaryColor = json.secondaryColor;
    standing.logo = json.logo;

    return standing;

  }
}