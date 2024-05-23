import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { TournamentPageComponent } from './pages/tournament-page/tournament-page.component';


@NgModule({
  declarations: [
    TournamentPageComponent
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule
  ]
})
export class TournamentsModule { }
