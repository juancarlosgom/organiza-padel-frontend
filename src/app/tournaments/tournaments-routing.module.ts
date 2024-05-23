import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentPageComponent } from './pages/tournament-page/tournament-page.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentPageComponent,
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
