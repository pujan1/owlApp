import { OwlTeam } from "../models/owl-team.model";

export type Title = string;
export type Id = number;
export type Scores = object;

export class OwlMatch {

  public title: Title;
  public id: Id;
  public scores: Scores;
  public team1: OwlTeam;
  public team2: OwlTeam;

  public fromJSON(json): OwlMatch { 

    const match = new OwlMatch();
    const team = new OwlTeam();
    

    match.title = 'jhskjdsjs';
    match.id = json.id;
    match.scores = json.scores;
    match.team1 = team.fromJSON(json.competitors[0]);

    
    return match;

  }
  
}