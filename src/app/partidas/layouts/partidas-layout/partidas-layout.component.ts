import { Component, OnInit, inject } from '@angular/core';
import { PartidasService } from '../../services/partidas-service.service';

@Component({
  selector: 'app-partidas-layout',
  templateUrl: './partidas-layout.component.html',
  styleUrl: './partidas-layout.component.css'
})
export class PartidasLayoutComponent implements OnInit {
  //public fecha
  fechaActual: Date = new Date();
  fechaMostrar: string = '';
  private partidaService = inject(PartidasService);

  ngOnInit() {
    //Actualizar fecha actual
    //this.fechaActual = this.partidaService.actualizarFechaActual(this.fechaActual);
  }



  // Avanzar un día
  avanzarDia() {
    //this.fechaActual = this.partidaService.avanzarDia(this.fechaActual);
  }

  // Método para retroceder un día
  retrocederDia() {
    //this.fechaActual = this.partidaService.retrocederDia(this.fechaActual);
  }

}
