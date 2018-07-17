
export type Id = number;
export type Map = string;
export type Points = object;
export type GameNumber = number;

export class OwlGame {

  public id: Id;
  public map: Map;
  public points: Points;
  public gameNumber: GameNumber;


  public fromJSON(json): OwlGame { 

    const game = new OwlGame();

    game.id = json.id;
    game.map = json.attributes.map;
    game.points = json.points;
    game.gameNumber = json.number;


    return game;

  }

}