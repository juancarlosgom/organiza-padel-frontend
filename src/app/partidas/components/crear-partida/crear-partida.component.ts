import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalServiceService } from '../../services/modal-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../interfaces/user.interface';
import { PartidasService } from '../../services/partidas-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'partidas-crear-partida',
  templateUrl: './crear-partida.component.html',
  styleUrl: './crear-partida.component.css',
})
export class CrearPartidaComponent implements OnInit {

  private modalService = inject(ModalServiceService);
  private partidasService = inject(PartidasService);

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private data = inject(MAT_DIALOG_DATA);
  public user?: User;

  constructor() {
    //console.log(this.data);
  }

  public myForm: FormGroup = this.fb.group({
    nombre: [{ value: '', disabled: true }, [Validators.required]],
    email: [{ value: '', disabled: true }, [Validators.required]],
    posicion: ['', [Validators.required]],
    genero: ['', Validators.required],
    categoria: [{ value: '', disabled: true }, Validators.required],
  });

  ngOnInit(): void {
    this.getDataUser()
      .subscribe((resp) => {
        //console.log(resp.usuarioAll);
        this.user = resp.usuarioAll;
        this.myForm.setValue({
          nombre: resp.usuarioAll.apellidos,
          email: resp.usuario.email,
          posicion: resp.usuarioAll.posicionPista,
          genero: resp.usuarioAll.genero,
          categoria: resp.usuarioAll.categoria,
        });
      });
  }

  registerGame() {
    this.partidasService.reserveTrack(this.data.startingHour, this.data.endHour,
      this.data.idTrack, this.data.date, true, this.myForm.value.genero)
      .subscribe((resp) => {
        if (resp.status) {
          this.myForm.reset();
          this.cancelGame();
          Swal.fire({
            title: 'Pista abierta',
            html: `
            <div>
            <p>Pista ${this.data.idTrack} para el: ${this.data.date}.</p>
            <p>De: ${this.data.startingHour} a ${this.data.endHour}.</p>
            <p>Podrá ver el estado de la partida en su perfil.</p>
            </div>
            `,
            icon: 'success',
            confirmButtonText: 'Ok',
            willClose: () => {
              //window.location.reload();
              this.router.navigate(['']).then(() => {
                this.router.navigate(['partidas/new']);
              });
            },
          });
        } else {
          Swal.fire({
            title: 'Partida no abierta',
            html: `
              Pista ${this.data.idTrack} no reservada el: ${this.data.date}.<br>
              De: ${this.data.startingHour} a ${this.data.endHour}.<br>
              <p>Ya estas inscrit@ en otra partida a la misma hora.</p>
              <p>O</p>
              <p>Has seleccionado una hora inferior a la actual.</p>
              <p>Para crear partida, se necesita, más de una hora de margen.</p>
            `,
            icon: 'error',
            confirmButtonText: 'Ok',
            willClose: () => {
              this.cancelGame();
            },
          });
        }
      });

  }

  cancelGame() {
    this.modalService.closeModal();
  }

  getDataUser() {
    return this.modalService.getDataUser();
  }
}
