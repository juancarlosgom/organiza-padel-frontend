import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTournamentPageComponent } from './pages/create-tournament-page/create-tournament-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTournamentLayoutComponent } from './layouts/create-tournament-layout/create-tournament-layout.component';
import { CreateTournamentRoutingModule } from './create-tournament-routing.module';



@NgModule({
  declarations: [
    CreateTournamentPageComponent,
    CreateTournamentLayoutComponent
  ],
  imports: [
    CommonModule,
    CreateTournamentRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CreateTournamentModule { }
