import { Component, OnInit, inject } from '@angular/core';
import { UserProfileServiceService } from '../../services/user-profile-service.service';
import { Observable } from 'rxjs';
import { Game } from '../../interfaces/games.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-look-games-user',
  templateUrl: './look-games-user.component.html',
  styleUrl: './look-games-user.component.css'
})
export class LookGamesUserComponent implements OnInit {

  private userProfileService = inject(UserProfileServiceService);
  private idUser: number = -1;
  private gamesUser: Game[] = [];
  public openGames: Game[] = [];
  public reserveGames: Game[] = [];
  ngOnInit(): void {
    //window.location.reload();
    this.getIdUser();

  }

  deleteReserve(idReserve: number) {
    Swal.fire({
      title: '¿Quieres eliminar la reserva?',
      showCancelButton: true,
      icon: 'question',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userProfileService.deleteReserve(idReserve)
          .subscribe((resp) => {
            window.location.reload();
          });
      }
    });
  }

  deleteUserOpenGame(idGame: number, player: string) {
    Swal.fire({
      title: '¿No puedes jugar?',
      showCancelButton: true,
      icon: 'question',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userProfileService.deleteUserOpenGame(idGame, player)
          .subscribe((resp) => {
            console.log(resp);
            //setTimeout(() => {
            window.location.reload();
            //}, 2000);

            //console.log(resp);
          });
      }
    });
  }

  getIdUser() {
    this.userProfileService.getIdUser()
      .subscribe((resp) => {
        this.idUser = resp.id;

        //Ejecuto aquí la función para esperar siempre a obtener el this.user, me daba un fallo a veces
        this.userProfileService.getGamesUser()
          .subscribe((resp) => {

            this.gamesUser = resp.datos;
            //console.log('Partidas que participo: ' + this.gamesUser);

            for (const game of this.gamesUser) {
              //console.log(game);
              if (game.searchGame === 0) {
                this.reserveGames.push(game);
              } else {
                this.getPlayerGameToUser(game);
                this.openGames.push(game);
              }
            }
          });

      });
  }

  getPlayerGameToUser(game: Game): void {
    //console.log(this.idUser);
    if ((game.jugador1 ?? 0) === this.idUser) {
      game.player = 'jugador1';
    } else if ((game.jugador2 ?? 0) === this.idUser) {
      game.player = 'jugador2';
    } else if ((game.jugador3 ?? 0) === this.idUser) {
      game.player = 'jugador3';
    } else if ((game.jugador4 ?? 0) === this.idUser) {
      game.player = 'jugador4';
    }

    console.log('Player partida: ' + game.player);

  }




}
