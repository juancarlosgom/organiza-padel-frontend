import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTournamentLayoutComponent } from './layouts/create-tournament-layout/create-tournament-layout.component';
import { CreateTournamentPageComponent } from './pages/create-tournament-page/create-tournament-page.component';


const routes: Routes = [
  {
    path: '',
    component: CreateTournamentLayoutComponent,
    children: [
      { path: 'create', component: CreateTournamentPageComponent },
      { path: '**', redirectTo: 'create' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTournamentRoutingModule { }
