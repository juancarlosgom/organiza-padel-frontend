import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingAppRoutingModule } from './ranking-app-routing.module';
import { RankingAppPageComponent } from './pages/ranking-app-page/ranking-app-page.component';


@NgModule({
  declarations: [
    RankingAppPageComponent
  ],
  imports: [
    CommonModule,
    RankingAppRoutingModule
  ]
})
export class RankingAppModule { }
