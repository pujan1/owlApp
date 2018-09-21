import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StandingsService {
  constructor(private http: Http) {}

  public getStandings() {
    return this.http.get('/standings')
      .map((res: Response) => res);
  }
}