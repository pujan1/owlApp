import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandingsRoutingModule } from './standings-routing.module';
import { StandingsComponent } from './standings.component';
import { StandingsService } from './standings.service';

@NgModule({
  imports: [
    CommonModule,
    StandingsRoutingModule
  ],
  declarations: [StandingsComponent],
  providers: [StandingsService]
})
export class StandingsModule { }
