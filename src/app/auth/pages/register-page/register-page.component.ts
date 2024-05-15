import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthServiceService);

  public myForm: FormGroup = this.fb.group({
    dni: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    email: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    posicionPista: ['', [Validators.required]],
    tallaCamiseta: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(4)]],
    categoria: ['', [Validators.required]],
    genero: ['', [Validators.required]],
    accept: ['', [Validators.requiredTrue]],
  });

  register() {
    console.log('Registrador');
    this.authService.register(this.myForm.value)
      .subscribe((resp) => {
        if (resp.status) {
          Swal.fire({
            title: 'Inscrito',
            text: `Incrito correctamente`,
            icon: 'success',
            confirmButtonText: 'Ok',
            willClose: () => {
              this.router.navigateByUrl('/auth/login');
            }
          });
        } else {
          Swal.fire({
            title: 'No inscrito',
            text: `Error al inscribirte`,
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }


      }
      );
    this.myForm.reset();
  }



}
