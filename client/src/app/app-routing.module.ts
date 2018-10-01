import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/standings',
    pathMatch: 'full'
  },
  {
    path: 'live-match',
    loadChildren: 'app/main/live-match/live-match.module#LiveMatchModule'
  },
  {
    path: 'news',
    loadChildren: 'app/main/news/news.module#NewsModule'
  },
  {
    path: 'players',
    loadChildren: 'app/main/players/players.module#PlayersModule'
  },
  {
    path: 'standings',
    loadChildren: 'app/main/standings/standings.module#StandingsModule'
  },
  {
    path: 'schedule',
    loadChildren: 'app/main/schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'stats',
    loadChildren: 'app/main/stats/stats.module#StatsModule'
  },
  {
    path: 'teams',
    loadChildren: 'app/main/teams/teams.module#TeamsModule'
  },
  {
    path: '**',
    redirectTo: '/standings',
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }


