import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingAppRoutingModule } from './ranking-app-routing.module';
import { RankingAppPageComponent } from './pages/ranking-app-page/ranking-app-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RankingAppPageComponent
  ],
  imports: [
    CommonModule,
    RankingAppRoutingModule,
    FormsModule,
  ]
})
export class RankingAppModule { }
