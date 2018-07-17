

export type Id = number;
export type Name = string;
export type PrimaryColor = string;
export type SecondaryColor = string;
export type Logo = string;

export class OwlTeam {

  public id: Id;
  public name: Name;
  public primaryColor: PrimaryColor;
  public secondaryColor: SecondaryColor;
  public logo: Logo;

  public fromJSON(json): OwlTeam {

    const team = new OwlTeam();

    team.id = json.id;
    team.name = json.name;
    team.primaryColor = json.primaryColor;
    team.secondaryColor = json.secondaryColor;
    team.logo = json.logo;

    return team;

  }
}