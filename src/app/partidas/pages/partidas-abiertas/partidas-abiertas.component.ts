import { Component, OnInit, inject } from '@angular/core';
import { Pista } from '../../interfaces/pista.interface';
import { PartidasService } from '../../services/partidas-service.service';
import { OpenGames } from '../../interfaces/openGames.interfaces';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partidas-abiertas',
  templateUrl: './partidas-abiertas.component.html',
  styleUrl: './partidas-abiertas.component.css'
})
export class PartidasAbiertasComponent implements OnInit {

  private router = inject(Router);
  private gamesService = inject(PartidasService);
  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    filterHour: [''],
    filterDate: [''],
    filterGender: [''],
  });
  /*filterHour?: string;
  filterDate?: string;
  filterCategory?: string;*/
  public openGames: OpenGames[] = [];

  ngOnInit(): void {
    this.gamesService.getGamesOpen()
      .subscribe((resp: any) => {
        //console.log(resp);
        if (resp.status) {
          resp.gamesOpen.forEach((openGame: OpenGames) => {
            this.openGames.push(openGame);
            //console.log(openGame);

          });
        }
      });
  }

  signUpGame(idPartida: number, numberPlayer: number) {
    this.gamesService.signUpGame(idPartida, numberPlayer)
      .subscribe((resp) => {
        if (resp.status) {
          Swal.fire({
            title: 'Inscrito en la partida',
            text: `Podrá ver el estado de la partida en su perfil`,
            icon: 'success',
            confirmButtonText: 'Ok',
            willClose: () => {
              //window.location.reload();
              this.router.navigate(['']).then(() => {
                this.router.navigate(['partidas/open']);
              });
            }
          });
        } else {
          if (resp.message === 'Error no pertenece a la categoría o género') {
            Swal.fire({
              title: 'Oh vaya!',
              html: `<p>Ha sucedido un error inesperado.</p>
                <p>No puedes inscribirte en esta partida.</p>
                <p>No perteneces a la misma categoría o género.</p>
              `,
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          } else {
            Swal.fire({
              title: 'Oh vaya!',
              html: `<p>Ha sucedido un error inesperado.</p>
                <p>Parece que ya tiene una partida a la misma hora.</p>
                <p>Revise sus partidas, en su perfil.</p>
              `,
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        }
      });
  }

  filterGame() {
    const { filterHour, filterDate, filterGender } = this.myForm.value;
    //Restablezco todos los valores
    this.openGames.forEach((game) => {
      game.show = false;
    });

    this.openGames.forEach((game) => {
      if (filterHour && filterHour !== game.horaInicio) {
        game.show = true;
      }
      if (filterDate && filterDate !== game.fecha) {
        game.show = true;
      }
      if (filterGender && filterGender !== game.genero) {
        game.show = true;
      }
    });

  }

  removeFilter() {
    this.openGames.forEach((game) => {
      game.show = false;
    });
    this.myForm.reset();
  }









}
