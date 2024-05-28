import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TournamentService } from '../../services/tournament.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-tournament',
  templateUrl: './sign-up-tournament.component.html',
  styleUrl: './sign-up-tournament.component.css'
})
export class SignUpTournamentComponent {

  private fb = inject(FormBuilder);
  private tournamentService = inject(TournamentService);
  public errors: boolean = false;
  private idTournament!: number;
  private router = inject(Router);

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(param => this.idTournament = param['idTournament']);
  }

  public myForm: FormGroup = this.fb.group({
    name1: ['', [Validators.required]],
    lastName1: ['', [Validators.required]],
    dni1: ['', [Validators.required]],
    size1: ['', [Validators.required]],
    name2: ['', [Validators.required]],
    lastName2: ['', [Validators.required]],
    dni2: ['', [Validators.required]],
    size2: ['', [Validators.required]],
    category: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });


  singUpTournament() {
    if (this.myForm.invalid) {
      this.errors = true;
    } else {
      this.errors = false;
      this.tournamentService.singUpTournament(this.myForm.value, this.idTournament)
        .subscribe((resp) => {
          //console.log(resp);
          if (resp.status) {
            Swal.fire({
              title: 'Te has incrito al torneo correctamente',
              icon: 'success',
              confirmButtonText: 'Ok',
              willClose: () => {
                this.router.navigate(['torneos']);
              },
            });
          } else {
            Swal.fire({
              title: 'Error',
              html: `
          <p>Ha sucedido un error inesperado, al inscribirte el torneo.</p>
        `,
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        });
    }
  }


}
