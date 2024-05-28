import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './inicio/pages/home-page/home-page.component';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { isAdminGuard } from './auth/guards/is-admin.guard';
import { CreateTournamentPageComponent } from './create-tournament/pages/create-tournament-page/create-tournament-page.component';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [isNotAuthenticatedGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'partidas',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('./partidas/partidas.module').then(m => m.PartidasModule),
  },
  {
    path: 'userProfile',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule),
  },
  {
    path: 'torneos',
    loadChildren: () => import('./tournaments/tournaments.module').then(m => m.TournamentsModule),
  },
  {
    path: 'rankingApp',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('./ranking-app/ranking-app.module').then(m => m.RankingAppModule),
  },
  {
    path: 'create-tournament',
    canActivate: [isAdminGuard],
    loadChildren: () => import('./create-tournament/create-tournament.module').then(m => m.CreateTournamentModule),
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
