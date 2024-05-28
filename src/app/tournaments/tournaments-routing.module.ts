import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentPageComponent } from './pages/tournament-page/tournament-page.component';
import { SignUpTournamentComponent } from './pages/sign-up-tournament/sign-up-tournament.component';
import { LayoutTournamentComponent } from './layouts/layout-tournament/layout-tournament.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutTournamentComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'look-tournament' },
      { path: 'look-tournament', component: TournamentPageComponent },
      { path: 'sing-up-tournament/:idTournament', component: SignUpTournamentComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }
