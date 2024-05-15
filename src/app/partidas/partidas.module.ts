import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidasAbiertasComponent } from './pages/partidas-abiertas/partidas-abiertas.component';
import { GenerarPartidasComponent } from './pages/generar-partidas/generar-partidas.component';
import { PartidasLayoutComponent } from './layouts/partidas-layout/partidas-layout.component';
import { PartidasRoutingModule } from './partidas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservarPistaPageComponent } from './pages/reservar-pista-page/reservar-pista-page.component';
import { CrearPartidaComponent } from './components/crear-partida/crear-partida.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ApuntarsePartidasComponent } from './components/apuntarse-partidas/apuntarse-partidas.component';


@NgModule({
  declarations: [
    PartidasAbiertasComponent,
    GenerarPartidasComponent,
    PartidasLayoutComponent,
    ReservarPistaPageComponent,
    CrearPartidaComponent,
    ApuntarsePartidasComponent,
  ],
  imports: [
    CommonModule,
    PartidasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PartidasModule { }
