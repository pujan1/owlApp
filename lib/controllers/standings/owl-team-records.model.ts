export type Wins = number;
export type Loss = number;
export type Draw = number;
export type GameWin = number;
export type GameLoss = number;
export type GameTie = number;
export type MapDiff = number;

export class OwlTeamRecords {

  public wins: Wins;
  public Loss: Loss;
  public draw: Draw;
  public gameWin: GameWin;
  public gameLoss: GameLoss;
  public gameTie: GameTie;
  public mapDiff: MapDiff

  public fromJSON(json): OwlTeamRecords {

    const records = new OwlTeamRecords();

    records.wins = json.matchWin;
    records.Loss = json.matchLoss;
    records.draw = json.matchDraw;
    records.gameWin = json.gameWin;
    records.gameLoss = json.gameLoss;
    records.gameTie = json.gameTie;
    records.mapDiff = json.comparisons[3].value;
    
    return records;

  }
}