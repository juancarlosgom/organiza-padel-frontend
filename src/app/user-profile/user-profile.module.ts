import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { LookGamesUserComponent } from './pages/look-games-user/look-games-user.component';
import { UserProfileLayoutComponent } from './layouts/user-profile-layout/user-profile-layout.component';



@NgModule({
  declarations: [
    LookGamesUserComponent,
    UserProfileLayoutComponent,
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
  ]
})
export class UserProfileModule { }
