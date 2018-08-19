import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/standings',
    pathMatch: 'full'
  },
  { path: 'standings', loadChildren: 'app/main/standings/standings.module#StandingsModule' },
  { path: 'schedule', loadChildren: 'app/main/schedule/schedule.module#ScheduleModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
