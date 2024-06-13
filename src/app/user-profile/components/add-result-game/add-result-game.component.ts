import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { Game } from '../../interfaces/games.interface';
import { UserProfileServiceService } from '../../services/user-profile-service.service';

@Component({
  selector: 'app-add-result-game',
  templateUrl: './add-result-game.component.html',
  styleUrl: './add-result-game.component.css'
})
export class AddResultGameComponent implements OnInit {

  private modalService = inject(ModalService);
  private userProfileService = inject(UserProfileServiceService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private data = inject(MAT_DIALOG_DATA);
  public dataGame?: Game;
  private idUser: number = -1;
  private jugador1!: number;
  private jugador2!: number;
  private jugador3!: number;
  private jugador4!: number;
  public j11: boolean = false;
  public j21: boolean = false;
  public j31: boolean = false;
  public j41: boolean = false;
  public j12: boolean = false;
  public j22: boolean = false;
  public j32: boolean = false;
  public j42: boolean = false;
  public j13: boolean = false;
  public j23: boolean = false;
  public j33: boolean = false;
  public j43: boolean = false;
  public j14: boolean = false;
  public j24: boolean = false;
  public j34: boolean = false;
  public j44: boolean = false;

  public myForm: FormGroup = this.fb.group({
    jugador1: [{ value: '', disabled: false }, [Validators.required]],
    jugador2: [{ value: '', disabled: false }, [Validators.required]],
    jugador3: [{ value: '', disabled: false }, [Validators.required]],
    jugador4: [{ value: '', disabled: false }, Validators.required],
    parejaGanadora: ['', Validators.required],
    resultado: ['', Validators.required]
  });

  private valuePlayer1: string = '0';
  private valuePlayer2: string = '0';
  private valuePlayer3: string = '0';
  private valuePlayer4: string = '0';


  ngOnInit(): void {

    this.getIdUser();

  }

  getIdUser() {
    this.userProfileService.getIdUser()
      .subscribe((resp) => {
        this.idUser = resp.id;
        this.modalService.getDataGame(this.data.idGame)
          .subscribe((resp) => {
            this.dataGame = resp.game[0];
            this.jugador1 = resp.game[0].jugador1;
            this.jugador2 = resp.game[0].jugador2;
            this.jugador3 = resp.game[0].jugador3;
            this.jugador4 = resp.game[0].jugador4;
            //console.log(this.dataGame);
          });

      });
  }

  registerResult() {
    this.myForm.enable();
    //console.log(this.myForm.value);
    const player = this.checkPlayer();
    //console.log(player);
    this.modalService.addResult(this.myForm.value, this.dataGame?.idPartida!, player)
      .subscribe((resp) => {
        //console.log(resp.datos);
        if (resp.status) {
          this.myForm.reset();
          this.cancelGame();
          Swal.fire({
            title: 'Resultado Guardado',
            html: `
            <div>
            <p>Solo falta que confirmen el resultado los demás jugadores,</p>
            <p>para poder agregar los puntos correspondientes.</p>
            </div>
            `,
            icon: 'success',
            confirmButtonText: 'Ok',
            willClose: () => {
              //window.location.reload();
              this.router.navigate(['']).then(() => {
                this.router.navigate(['userProfile/add-results-game']);
              });
            },
          });
        } else {
          Swal.fire({
            title: 'Error',
            html: `
              <p>Ha sucedido un error inesperado, al agregar el resultado.</p>
            `,
            icon: 'error',
            confirmButtonText: 'Ok',
            willClose: () => {
              this.cancelGame();
            },
          });
        }
      })
    //console.log(this.myForm.value);

  }

  cancelGame() {
    this.modalService.closeModal();
  }

  checkPlayer(): string {
    let player: string = '';
    if (this.myForm.value.jugador1 === this.idUser.toString()) {
      return player = '1';
    } else if (this.myForm.value.jugador2 === this.idUser.toString()) {
      return player = '2';
    } else if (this.myForm.value.jugador3 === this.idUser.toString()) {
      return player = '3';
    } else {
      return player = '4';
    }
  }

  addValuePlayer1() {
    if (this.myForm.value.jugador1 === '') {
      this.valuePlayer1 = '0';
    } else {
      if (this.jugador1.toString() === this.myForm.value.jugador1) {
        this.valuePlayer1 = this.myForm.value.jugador1;
      }
      if (this.jugador2.toString() === this.myForm.value.jugador1) {
        this.valuePlayer2 = this.myForm.value.jugador1;
      }
      if (this.jugador3.toString() === this.myForm.value.jugador1) {
        this.valuePlayer3 = this.myForm.value.jugador1;
      }
      if (this.jugador4.toString() === this.myForm.value.jugador1) {
        this.valuePlayer4 = this.myForm.value.jugador1;
      }
    }
    this.myForm.get('jugador1')?.disable();
  }
  checkValuesLook1() {
    if (this.valuePlayer1 !== '0' && this.valuePlayer1 === this.jugador1.toString()) {
      this.j11 = true;
    } else {
      this.j11 = false;
    }
    if (this.valuePlayer2 !== '0' && this.valuePlayer2 === this.jugador2.toString()) {
      this.j12 = true;
    } else {
      this.j12 = false;
    }
    if (this.valuePlayer3 !== '0' && this.valuePlayer3 === this.jugador3.toString()) {
      this.j13 = true;
    } else {
      this.j13 = false;
    }
    if (this.valuePlayer4 !== '0' && this.valuePlayer4 === this.jugador4.toString()) {
      this.j14 = true;
    } else {
      this.j14 = false;
    }
  }
  addValuePlayer2() {
    if (this.myForm.value.jugador2 === '') {
      this.valuePlayer2 = '0';
    } else {
      if (this.jugador1.toString() === this.myForm.value.jugador2) {
        this.valuePlayer1 = this.myForm.value.jugador2;
      }
      if (this.jugador2.toString() === this.myForm.value.jugador2) {
        this.valuePlayer2 = this.myForm.value.jugador2;
      }
      if (this.jugador3.toString() === this.myForm.value.jugador2) {
        this.valuePlayer3 = this.myForm.value.jugador2;
      }
      if (this.jugador4.toString() === this.myForm.value.jugador2) {
        this.valuePlayer4 = this.myForm.value.jugador2;
      }
    }
    this.myForm.get('jugador2')?.disable();
  }
  checkValuesLook2() {
    if (this.valuePlayer1 !== '0' && this.valuePlayer1 === this.jugador1.toString()) {
      this.j21 = true;
    } else {
      this.j21 = false;
    }
    if (this.valuePlayer2 !== '0' && this.valuePlayer2 === this.jugador2.toString()) {
      this.j22 = true;
    } else {
      this.j22 = false;
    }
    if (this.valuePlayer3 !== '0' && this.valuePlayer3 === this.jugador3.toString()) {
      this.j23 = true;
    } else {
      this.j23 = false;
    }
    if (this.valuePlayer4 !== '0' && this.valuePlayer4 === this.jugador4.toString()) {
      this.j24 = true;
    } else {
      this.j24 = false;
    }
  }
  addValuePlayer3() {
    if (this.myForm.value.jugador3 === '') {
      this.valuePlayer3 = '0';
    } else {
      if (this.jugador1.toString() === this.myForm.value.jugador3) {
        this.valuePlayer1 = this.myForm.value.jugador3;
      }
      if (this.jugador2.toString() === this.myForm.value.jugador3) {
        this.valuePlayer2 = this.myForm.value.jugador3;
      }
      if (this.jugador3.toString() === this.myForm.value.jugador3) {
        this.valuePlayer3 = this.myForm.value.jugador3;
      }
      if (this.jugador4.toString() === this.myForm.value.jugador3) {
        this.valuePlayer4 = this.myForm.value.jugador3;
      }
    }
    this.myForm.get('jugador3')?.disable();
  }
  checkValuesLook3() {
    if (this.valuePlayer1 !== '0' && this.valuePlayer1 === this.jugador1.toString()) {
      this.j31 = true;
    } else {
      this.j31 = false;
    }
    if (this.valuePlayer2 !== '0' && this.valuePlayer2 === this.jugador2.toString()) {
      this.j32 = true;
    } else {
      this.j32 = false;
    }
    if (this.valuePlayer3 !== '0' && this.valuePlayer3 === this.jugador3.toString()) {
      this.j33 = true;
    } else {
      this.j33 = false;
    }
    if (this.valuePlayer4 !== '0' && this.valuePlayer4 === this.jugador4.toString()) {
      this.j34 = true;
    } else {
      this.j34 = false;
    }
  }
  addValuePlayer4() {
    if (this.myForm.value.jugador4 === '') {
      this.valuePlayer4 = '0';
    } else {
      if (this.jugador1.toString() === this.myForm.value.jugador4) {
        this.valuePlayer1 = this.myForm.value.jugador4;
      }
      if (this.jugador2.toString() === this.myForm.value.jugador4) {
        this.valuePlayer2 = this.myForm.value.jugador4;
      }
      if (this.jugador3.toString() === this.myForm.value.jugador4) {
        this.valuePlayer3 = this.myForm.value.jugador4;
      }
      if (this.jugador4.toString() === this.myForm.value.jugador4) {
        this.valuePlayer4 = this.myForm.value.jugador4;
      }
    }
    this.myForm.get('jugador4')?.disable();
  }
  checkValuesLook4() {
    if (this.valuePlayer1 !== '0' && this.valuePlayer1 === this.jugador1.toString()) {
      this.j41 = true;
    } else {
      this.j41 = false;
    }
    if (this.valuePlayer2 !== '0' && this.valuePlayer2 === this.jugador2.toString()) {
      this.j42 = true;
    } else {
      this.j42 = false;
    }
    if (this.valuePlayer3 !== '0' && this.valuePlayer3 === this.jugador3.toString()) {
      this.j43 = true;
    } else {
      this.j43 = false;
    }
    if (this.valuePlayer4 !== '0' && this.valuePlayer4 === this.jugador4.toString()) {
      this.j44 = true;
    } else {
      this.j44 = false;
    }
  }
}
