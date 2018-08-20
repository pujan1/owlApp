import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveMatchComponent } from './live-match.component';

const routes: Routes = [
  {
      path: '',
      component: LiveMatchComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveMatchRoutingModule { }
