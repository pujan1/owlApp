import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing';
import { StandingsComponent } from '../standings/standings.component';
import { ScheduleComponent } from '../schedule/schedule.component';



@NgModule({
  declarations: [
    MainComponent,
    StandingsComponent,
    ScheduleComponent
  ],
  imports: [
    MainRoutingModule
  ],
})

export class MainModule {
  constructor() {
    console.log('djsdjsd');
  }
}
