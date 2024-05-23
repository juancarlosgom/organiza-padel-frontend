import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { LookGamesUserComponent } from './pages/look-games-user/look-games-user.component';
import { UserProfileLayoutComponent } from './layouts/user-profile-layout/user-profile-layout.component';
import { AddResultsPageComponent } from './pages/add-results-page/add-results-page.component';
import { ConfirmResultsPageComponent } from './pages/confirm-results-page/confirm-results-page.component';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileLayoutComponent,
    children: [
      { path: 'my-account', component: UserProfilePageComponent },
      { path: 'look-game-open', component: LookGamesUserComponent },
      { path: 'add-results-game', component: AddResultsPageComponent },
      { path: 'confirm-results-game', component: ConfirmResultsPageComponent },
      { path: 'edit-profile', component: EditProfilePageComponent },
      { path: 'statistics', component: StatisticsPageComponent },
      { path: 'history', component: HistoryPageComponent },
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
