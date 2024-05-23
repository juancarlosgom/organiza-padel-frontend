import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingAppPageComponent } from './pages/ranking-app-page/ranking-app-page.component';

const routes: Routes = [
  {
    path: '',
    component: RankingAppPageComponent,
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
export class RankingAppRoutingModule { }
