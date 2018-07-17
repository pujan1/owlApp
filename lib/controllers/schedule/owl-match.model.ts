import { OwlTeam } from "../models/owl-team.model";
import { OwlGame } from "./owl-game.model";
import { map } from 'lodash';

export type Id = number;
export type Scores = object;
export type State = string;
export type StartDate = Date;
export type EndtDate = Date;

export class OwlMatch {

  public id: Id;
  public scores: Scores;
  public team1: OwlTeam;
  public team2: OwlTeam;
  public winner: OwlTeam;
  public state: State;
  public startDate: StartDate;
  public endDate: StartDate;
  public games: OwlGame[] = [];

  public fromJSON(json): OwlMatch { 

    const match = new OwlMatch();
    const team = new OwlTeam();
    const game = new OwlGame();
  
    match.id = json.id;
    match.scores = json.scores;
    if(!json.competitors.includes(null)){
      match.team1 = team.fromJSON(json.competitors[0]);
      match.team2 = team.fromJSON(json.competitors[1]);
      if(json.state === 'CONCLUDED') match.winner = team.fromJSON(json.winner)
    }
    match.startDate = json.startDate;
    match.endDate = json.endDate;
    match.state = json.state;
    match.games = map(json.games, game.fromJSON)

    return match;
  }
}