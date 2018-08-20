import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveMatchRoutingModule } from './live-match-routing.module';
import { LiveMatchComponent } from './live-match.component';

@NgModule({
  imports: [
    CommonModule,
    LiveMatchRoutingModule
  ],
  declarations: [LiveMatchComponent]
})
export class LiveMatchModule { }
