import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { UserProfileServiceService } from '../../services/user-profile-service.service';
import { ConfirmGame } from '../../interfaces/confirmGames.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-results-page',
  templateUrl: './confirm-results-page.component.html',
  styleUrl: './confirm-results-page.component.css'
})
export class ConfirmResultsPageComponent implements OnInit {

  private fb = inject(FormBuilder);



  public myForm: FormGroup = this.fb.group({
    jugador1: [{ value: '', disabled: true }, [Validators.required]],
    jugador2: [{ value: '', disabled: true }, [Validators.required]],
    jugador3: [{ value: '', disabled: true }, [Validators.required]],
    jugador4: [{ value: '', disabled: true }, Validators.required],
    parejaGanadora: [{ value: '', disabled: true }, Validators.required],
    resultado: [{ value: '', disabled: true }, Validators.required]
  });

  private userProfileService = inject(UserProfileServiceService);
  private idUser: number = -1;
  public confirmGames: ConfirmGame[] = [];
  private router = inject(Router);

  public myFormFilter: FormGroup = this.fb.group({
    filterHour: [''],
    filterDate: [''],
    filterGender: [''],
  });
  public initialForm = this.myForm.value;

  ngOnInit(): void {
    //window.location.reload();
    this.getIdUser();

  }



  getIdUser() {
    this.userProfileService.getIdUser()
      .subscribe((resp) => {
        this.idUser = resp.id;
        this.userProfileService.getConfirmGamesUser()
          .subscribe((resp) => {
            //console.log(resp);
            this.confirmGames = resp.games;
          });

      });
  }


  filterGame() {
    const { filterHour, filterDate, filterGender } = this.myForm.value;
    //Restablezco todos los valores
    this.confirmGames.forEach((game) => {
      game.show = false;
    });

    this.confirmGames.forEach((game) => {
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
    this.confirmGames.forEach((game) => {
      game.show = false;
    });
    this.myForm.patchValue(this.initialForm);
  }

  confirmResult(idResult: number, game: ConfirmGame) {
    const player = this.checkPlayer(game);
    this.userProfileService.confirmResult(idResult, player)
      .subscribe((resp) => {
        if (resp.status) {
          Swal.fire({
            title: 'Resultado Confirmado',
            html: `
            <div>
            <p>Cuando confirmen el resultado los demás jugadores,</p>
            <p>se añadirán los puntos correspondientes.</p>
            </div>
            `,
            icon: 'success',
            confirmButtonText: 'Ok',
            willClose: () => {
              //window.location.reload();
              this.router.navigate(['']).then(() => {
                this.router.navigate(['userProfile/confirm-results-game']);
              });
            },
          });
        } else {
          Swal.fire({
            title: 'Error',
            html: `
              <p>Ha sucedido un error inesperado, al confirmar el resultado.</p>
            `,
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      })
  }

  checkPlayer(game: ConfirmGame): string {
    let player: string = '';
    if (game.jugador1 === this.idUser) {
      return player = '1';
    } else if (game.jugador2 === this.idUser) {
      return player = '2';
    } else if (game.jugador3 === this.idUser) {
      return player = '3';
    } else {
      return player = '4';
    }
  }

}

