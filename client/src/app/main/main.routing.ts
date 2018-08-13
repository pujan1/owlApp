import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StandingsComponent } from '../standings/standings.component';
import { ScheduleComponent } from '../schedule/schedule.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: StandingsComponent
      },
      {
        path: 'standings',
        component: StandingsComponent
      },
      {
        path: 'schedules',
        component: ScheduleComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class MainRoutingModule {}
