import { Component, OnInit, inject } from '@angular/core';
import { Pista } from '../../interfaces/pista.interface';
import { PartidasService } from '../../services/partidas-service.service';
import { Observable } from 'rxjs';
import { HorarioPista } from '../../interfaces/horarioPista.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservar-pista-page',
  templateUrl: './reservar-pista-page.component.html',
  styleUrl: './reservar-pista-page.component.css'
})
export class ReservarPistaPageComponent implements OnInit {

  /*fechaActual: Date = new Date();
  fechaMostrar: string = '';
  contDays: number = 0;
  private partidasService = inject(PartidasService);
  private pistasReservadas: Pista[] = [];
  private horaInicio: string[] = [
    '08:30',
    '10:00',
    '11:30',
    '13:00',
    '14:30',
    '16:00',
    '17:30',
    '19:00',
    '20:30',
  ];
  private horaFin: string[] = [
    '10:00',
    '11:30',
    '13:00',
    '14:30',
    '16:00',
    '17:30',
    '19:00',
    '20:30',
    '22:00',
  ];

  public pistas: Pista[] = [];

  ngOnInit(): void {
    //Actualizar fecha actual
    this.partidasService.getDate(this.contDays).
      subscribe(
        (resp) => {
          this.fechaActual = new Date(resp.datos);
          this.pistas = this.getTracks();
          this.pistasReservadas = resp.pistasReservadas;
          this.contDays = resp.diasSumados;
          this.fechaMostrar = this.changeDateString(this.fechaActual);
          this.mountTracks();

        },

      );

  }

  // Avanzar un día
  avanzarDia() {
    this.contDays++;
    this.partidasService.avanzarDia(this.contDays).
      subscribe(
        (resp) => {
          this.fechaActual = new Date(resp.datos);
          this.pistas = this.getTracks();
          this.pistasReservadas = resp.pistasReservadas;
          this.contDays = resp.diasSumados;
          this.fechaMostrar = this.changeDateString(this.fechaActual);
          this.mountTracks();
        }
      );

  }

  // Método para retroceder un día
  retrocederDia() {
    if ((this.contDays - 1) < 0) {
      Swal.fire({
        title: 'Error',
        text: `No puedes reservar pistas en fechas anteriores a la fecha actual`,
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    } else {
      this.contDays--;
      this.partidasService.avanzarDia(this.contDays).
        subscribe(
          (resp) => {
            this.fechaActual = new Date(resp.datos);
            this.pistas = this.getTracks();
            this.pistasReservadas = resp.pistasReservadas;
            this.contDays = resp.diasSumados;
            this.fechaMostrar = this.changeDateString(this.fechaActual);
            this.mountTracks();
          }
        );
    }
  }

  //Convertir fecha en string
  changeDateString(fecha: Date): string {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anyo = fecha.getFullYear();
    return (dia + ' - ') + mes + ' - ' + (anyo + '');
  }

  //Reservar pistas
  reserveTrack(horaInicio: string, horaFin: string, idPista: number) {
    this.partidasService.reserveTrack(horaInicio, horaFin, idPista, this.fechaActual.toISOString())
      .subscribe(
        (resp) => {
          console.log(resp);
          if (resp.status) {
            Swal.fire({
              title: 'Pista reservada',
              text: `
                Pista ${idPista} reservada el: ${this.fechaMostrar}.
                De: ${horaInicio} a ${horaFin}.
              `,
              icon: 'success',
              confirmButtonText: 'Ok',
              willClose: () => {
                window.location.reload();
              }
            });
          } else {
            console.error('La reserva de pista no fue exitosa');
          }
        }
      );
  }

  //Obtener pistas reservadas
  getTracksRerve(tracks: Observable<Pista>) {
    const getTracks: Pista[] = [];
    tracks.forEach((pista: Pista) => {
      console.log(pista);
      getTracks.push(pista);
    });
  }

  getTracks(): Pista[] {
    const pista: Pista[] = [
      {
        idPista: 1,
        horario: this.horaInicio.map((horaInicio, index) => ({
          horaInicio: horaInicio,
          horaFin: this.horaFin[index],
          fecha: this.fechaActual.toISOString(),
          reservado: false,
        })),
      },
      {
        idPista: 2,
        horario: this.horaInicio.map((horaInicio, index) => ({
          horaInicio: horaInicio,
          horaFin: this.horaFin[index],
          fecha: this.fechaActual.toISOString(),
          reservado: false,
        })),
      },
      {
        idPista: 3,
        horario: this.horaInicio.map((horaInicio, index) => ({
          horaInicio: horaInicio,
          horaFin: this.horaFin[index],
          fecha: this.fechaActual.toISOString(),
          reservado: false,
        })),
      },
      {
        idPista: 4,
        horario: this.horaInicio.map((horaInicio, index) => ({
          horaInicio: horaInicio,
          horaFin: this.horaFin[index],
          fecha: this.fechaActual.toISOString(),
          reservado: false,
        })),
      },
    ];

    return pista;
  }

  mountTracks() {
    this.pistas.forEach((pista) => {
      this.pistasReservadas.forEach((pistaR: any) => {
        if (pista.idPista === pistaR.idPista) {
          pista.horario.forEach((horario: HorarioPista) => {
            if ((horario.horaInicio === pistaR.horaInicio) && (horario.horaFin === pistaR.horaFin)) {
              horario.reservado = true;
            }

          });
        }
      });
    });
  }*/
  fechaActualizada: string;
  hourFilter: string = '';
  private partidasService = inject(PartidasService);
  private pistasReservadas: Pista[] = [];
  private horaInicio: string[] = [
    '08:30',
    '10:00',
    '11:30',
    '13:00',
    '14:30',
    '16:00',
    '17:30',
    '19:00',
    '20:30',
  ];
  private horaFin: string[] = [
    '10:00',
    '11:30',
    '13:00',
    '14:30',
    '16:00',
    '17:30',
    '19:00',
    '20:30',
    '22:00',
  ];

  public pistas: Pista[] = [];

  constructor() {
    this.fechaActualizada = this.getCurrentDate();
  }

  ngOnInit(): void {
    //Actualizar fecha actual
    this.partidasService.getDateUpdate(this.getCurrentDate()).
      subscribe(
        (resp) => {
          this.pistas = this.getTracks();
          this.pistasReservadas = resp.pistasReservadas;
          this.mountTracks();
        },
      );

  }

  updateDate() {
    const currentDate = new Date(this.getCurrentDate());
    const inputDate = new Date(this.fechaActualizada);
    if (currentDate > inputDate) {
      Swal.fire({
        title: 'Error',
        text: `No puedes reservar pistas en fechas anteriores a la fecha actual`,
        icon: 'error',
        confirmButtonText: 'Ok',
        willClose: () => {
          window.location.reload();
        }
      });
    } else {
      this.actualizarDia();
    }
  }

  filterByHour() {
    this.pistas.forEach((pista) => {
      pista.horario.forEach((horario) => {
        if (horario.horaInicio === this.hourFilter) {
          horario.mostrar = true;
        } else if (this.hourFilter === 'todas') {
          horario.mostrar = true;
        } else {
          horario.mostrar = false;
        }
      })
    })
  }




  //Reservar pistas
  reserveTrack(horaInicio: string, horaFin: string, idPista: number) {
    this.partidasService.reserveTrack(horaInicio, horaFin, idPista,
      this.fechaActualizada, false, '')
      .subscribe(
        (resp) => {
          //console.log(resp);
          if (resp.status) {
            Swal.fire({
              title: 'Pista reservada',
              text: `
                Pista ${idPista} reservada el: ${this.fechaActualizada}.
                De: ${horaInicio} a ${horaFin}.
              `,
              icon: 'success',
              confirmButtonText: 'Ok',
              willClose: () => {
                window.location.reload();
              }
            });
          } else {
            Swal.fire({
              title: 'Pista no reservada',
              html: `
                Pista ${idPista} no reservada el: ${this.fechaActualizada}.<br>
                De: ${horaInicio} a ${horaFin}.<br>
                <p>Estas inscrit@ en otra partida a la misma hora.</p>
                <p>O</p>
                <p>Has seleccionado una hora inferior a la actual.</p>
              `,
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        }
      );
  }

  // Actualizar el día para mostrar pistas de ese dia
  actualizarDia() {
    this.partidasService.getDateUpdate(this.fechaActualizada).
      subscribe(
        (resp) => {
          this.pistas = this.getTracks();
          this.pistasReservadas = resp.pistasReservadas;
          this.mountTracks();
        }
      );

  }


  getTracks(): Pista[] {
    const pista: Pista[] = [
      {
        idPista: 1,
        horario: this.horaInicio.map((horaInicio, index) => ({
          horaInicio: horaInicio,
          horaFin: this.horaFin[index],
          fecha: this.fechaActualizada,
          reservado: false,
          mostrar: true,
        })),
      },
      {
        idPista: 2,
        horario: this.horaInicio.map((horaInicio, index) => ({
          horaInicio: horaInicio,
          horaFin: this.horaFin[index],
          fecha: this.fechaActualizada,
          reservado: false,
          mostrar: true,
        })),
      },
      {
        idPista: 3,
        horario: this.horaInicio.map((horaInicio, index) => ({
          horaInicio: horaInicio,
          horaFin: this.horaFin[index],
          fecha: this.fechaActualizada,
          reservado: false,
          mostrar: true,
        })),
      },
      {
        idPista: 4,
        horario: this.horaInicio.map((horaInicio, index) => ({
          horaInicio: horaInicio,
          horaFin: this.horaFin[index],
          fecha: this.fechaActualizada,
          reservado: false,
          mostrar: true,
        })),
      },
    ];

    return pista;
  }

  mountTracks() {
    this.pistas.forEach((pista) => {
      this.pistasReservadas.forEach((pistaR: any) => {
        if (pista.idPista === pistaR.idPista) {
          pista.horario.forEach((horario: HorarioPista) => {
            if ((horario.horaInicio === pistaR.horaInicio) && (horario.horaFin === pistaR.horaFin)) {
              horario.reservado = true;
            }

          });
        }
      });
    });
  }

  getCurrentDate() {
    const hoy = new Date();
    const dia = hoy.getDate() < 10 ? '0' + hoy.getDate() : hoy.getDate();
    const mes = hoy.getMonth() + 1 < 10 ? '0' + (hoy.getMonth() + 1) : hoy.getMonth() + 1;
    const anio = hoy.getFullYear();
    const currentDate: string = `${anio}-${mes}-${dia}`;
    return currentDate;
  }
}
