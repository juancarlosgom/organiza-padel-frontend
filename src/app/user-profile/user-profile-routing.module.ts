import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { LookGamesUserComponent } from './pages/look-games-user/look-games-user.component';
import { UserProfileLayoutComponent } from './layouts/user-profile-layout/user-profile-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileLayoutComponent,
    children: [
      { path: 'my-account', component: UserProfilePageComponent },
      { path: 'look-game-open', component: LookGamesUserComponent },
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
export class UserProfileRoutingModule { }
