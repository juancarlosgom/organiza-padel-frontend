import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTournamentService } from '../../services/create-tournament.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tournament-page',
  templateUrl: './create-tournament-page.component.html',
  styleUrl: './create-tournament-page.component.css'
})
export class CreateTournamentPageComponent {

  private createTournamentService = inject(CreateTournamentService);
  private router = inject(Router);

  private fb = inject(FormBuilder);
  selectedFile?: File;

  public myForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    dateStart: ['', [Validators.required]],
    dateEnd: ['', [Validators.required]],
    price: ['', [Validators.required]],
    img: ['', [Validators.required]],
  });

  public checkTitle: boolean = false;
  public checkDescription: boolean = false;
  public checkDateStart: boolean = false;
  public checkDateEnd: boolean = false;
  public checkPrice: boolean = false;
  public checkImg: boolean = false;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  createTournament() {
    if (this.checkErrors()) {
      console.log('No enviado');
    } else {
      const formData = new FormData();
      formData.append('title', this.myForm.value.title);
      formData.append('description', this.myForm.value.description);
      formData.append('dateStart', this.myForm.value.dateStart);
      formData.append('dateEnd', this.myForm.value.dateEnd);
      formData.append('price', this.myForm.value.price);
      formData.append('img', this.selectedFile!, this.selectedFile!.name);
      this.createTournamentService.addTournament(formData)
        .subscribe((resp) => {
          //console.log(resp);
          if (resp.status) {
            Swal.fire({
              title: 'Torneo creado correctamente',
              icon: 'success',
              confirmButtonText: 'Ok',
              willClose: () => {
                this.router.navigate(['torneos']);
              },
            });
          } else {
            if (resp.error === 400) {
              Swal.fire({
                title: 'Error al crear torneo',
                html: `
                  <p>El archivo debe ser .jpg o .jpeg</p>
                `,
                icon: 'error',
                confirmButtonText: 'Ok',
              });
            } else if (resp.error === 401) {
              Swal.fire({
                title: 'Error al crear torneo',
                html: `
                  <p>Comprueba las fechas seleccionadas</p>
                  <p>Recuerda como deben ser:</p>
                  <p>Fecha inicio: Más de una semana de antelación.</p>
                  <p>Fecha fin: Mayor o igual a la fecha de inicio.</p>
                `,
                icon: 'error',
                confirmButtonText: 'Ok',
              });
            } else if (resp.error === 402) {
              Swal.fire({
                title: 'Error al crear torneo',
                html: `
                  <p>Fechas no disponibles.</p>
                  <p>Ya tienes un torneo creado en estas fechas.</p>
                `,
                icon: 'error',
                confirmButtonText: 'Ok',
              });
            } else {
              Swal.fire({
                title: 'Error al crear torneo',
                html: `
                  <p>Ha sucedido un error inesperado, al crear el torneo.</p>
                `,
                icon: 'error',
                confirmButtonText: 'Ok',
              });
            }
          }
        })
    }


  }

  checkErrors(): boolean {
    let fails = false;
    if (this.myForm.get('title')?.invalid) {
      this.checkTitle = true;
      fails = true;
    } else {
      this.checkTitle = false;
    }
    if (this.myForm.get('description')?.invalid) {
      this.checkDescription = true;
      fails = true;
    } else {
      this.checkDescription = false;
    }
    if (this.myForm.get('dateStart')?.invalid) {
      this.checkDateStart = true;
      fails = true;
    } else {
      this.checkDateStart = false;
    }
    if (this.myForm.get('dateEnd')?.invalid) {
      this.checkDateEnd = true;
      fails = true;
    } else {
      this.checkDateEnd = false;
    }
    if (this.myForm.get('price')?.invalid) {
      this.checkPrice = true;
      fails = true;
    } else {
      this.checkPrice = false;
    }
    if (this.myForm.get('img')?.invalid) {
      this.checkImg = true;
      fails = true;
    } else {
      this.checkImg = false;
    }

    return fails;
  }


}
