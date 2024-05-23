import { Component, OnInit, inject } from '@angular/core';
import { UserProfileServiceService } from '../../services/user-profile-service.service';
import { Observable } from 'rxjs';
import { Game } from '../../interfaces/games.interface';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-add-results-page',
  templateUrl: './add-results-page.component.html',
  styleUrl: './add-results-page.component.css'
})
export class AddResultsPageComponent {

  private userProfileService = inject(UserProfileServiceService);
  private idUser: number = -1;
  public adminGames: Game[] = [];

  private fb = inject(FormBuilder);
  private modalService = inject(ModalService);

  public myForm: FormGroup = this.fb.group({
    filterHour: [''],
    filterDate: [''],
    filterGender: [''],
  });

  ngOnInit(): void {
    //window.location.reload();
    this.getIdUser();

  }

  openModalAddResult(players: number[], idGame: number) {
    this.modalService.openModal(players, idGame);
  }


  getIdUser() {
    this.userProfileService.getIdUser()
      .subscribe((resp) => {
        this.idUser = resp.id;

        //Ejecuto aquí la función para esperar siempre a obtener el this.user, me daba un fallo a veces
        this.userProfileService.getAdminGames()
          .subscribe((resp) => {
            //console.log(resp);
            this.adminGames = resp.games;
          });
      });
  }


  filterGame() {
    const { filterHour, filterDate, filterGender } = this.myForm.value;
    //Restablezco todos los valores
    this.adminGames.forEach((game) => {
      game.show = false;
    });

    this.adminGames.forEach((game) => {
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
    this.adminGames.forEach((game) => {
      game.show = false;
    });
    this.myForm.reset();
  }




}
