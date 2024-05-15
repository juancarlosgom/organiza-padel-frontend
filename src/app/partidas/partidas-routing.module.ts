import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidasLayoutComponent } from './layouts/partidas-layout/partidas-layout.component';
import { PartidasAbiertasComponent } from './pages/partidas-abiertas/partidas-abiertas.component';
import { GenerarPartidasComponent } from './pages/generar-partidas/generar-partidas.component';
import { ReservarPistaPageComponent } from './pages/reservar-pista-page/reservar-pista-page.component';

const routes: Routes = [
  {
    path: '',
    component: PartidasLayoutComponent,
    children: [
      { path: 'open', component: PartidasAbiertasComponent },
      { path: 'new', component: GenerarPartidasComponent },
      { path: 'reserveTrack', component: ReservarPistaPageComponent },
      { path: '**', redirectTo: '' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidasRoutingModule { }
