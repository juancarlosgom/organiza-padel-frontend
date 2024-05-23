import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { LookGamesUserComponent } from './pages/look-games-user/look-games-user.component';
import { UserProfileLayoutComponent } from './layouts/user-profile-layout/user-profile-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddResultsPageComponent } from './pages/add-results-page/add-results-page.component';
import { AddResultGameComponent } from './components/add-result-game/add-result-game.component';
import { ConfirmResultsPageComponent } from './pages/confirm-results-page/confirm-results-page.component';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';



@NgModule({
  declarations: [
    LookGamesUserComponent,
    UserProfileLayoutComponent,
    AddResultsPageComponent,
    AddResultGameComponent,
    ConfirmResultsPageComponent,
    EditProfilePageComponent,
    StatisticsPageComponent,
    HistoryPageComponent,
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserProfileModule { }
