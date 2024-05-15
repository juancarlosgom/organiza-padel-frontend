import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './inicio/pages/home-page/home-page.component';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { LookGamesUserComponent } from './user-profile/pages/look-games-user/look-games-user.component';

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
