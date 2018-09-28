import { Component, OnInit } from '@angular/core';
import { StandingsService } from './standings.service';


@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  public standings: any;

  constructor(
    private standingsService: StandingsService
  ) { }

  ngOnInit() {
    this.standings = this.standingsService.getStandings();
    console.log(this.standings);
  }

}
