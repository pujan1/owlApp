import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandingsRoutingModule } from './standings-routing.module';
import { StandingsComponent } from './standings.component';

@NgModule({
  imports: [
    CommonModule,
    StandingsRoutingModule
  ],
  declarations: [StandingsComponent]
})
export class StandingsModule { }
