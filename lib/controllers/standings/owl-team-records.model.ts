export type Wins = number;
export type Loss = number;
export type Draw = number;
export type MapWins = number;
export type MapLoss = number;
export type MapDraw = number;
export type MapDiff = number;

export class OwlTeamRecords {

  public wins: Wins;
  public Loss: Loss;
  public draw: Draw;
  public mapWins: MapWins;
  public mapLoss: MapLoss;
  public mapDraw: MapDraw;
  public mapDiff: MapDiff

  public fromJSON(json): OwlTeamRecords {

    const records = new OwlTeamRecords();

    records.wins = json.matchWin;
    records.Loss = json.matchLoss;
    records.draw = json.matchDraw;
    records.mapWins = json.gameWin;
    records.mapLoss = json.gameLoss;
    records.mapDraw = json.gameTie;
    records.mapDiff = json.comparisons[3].value;
    
    return records;

  }
}