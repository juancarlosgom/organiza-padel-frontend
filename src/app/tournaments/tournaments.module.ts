import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { TournamentPageComponent } from './pages/tournament-page/tournament-page.component';
import { SignUpTournamentComponent } from './pages/sign-up-tournament/sign-up-tournament.component';
import { LayoutTournamentComponent } from './layouts/layout-tournament/layout-tournament.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TournamentPageComponent,
    SignUpTournamentComponent,
    LayoutTournamentComponent
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class TournamentsModule { }
