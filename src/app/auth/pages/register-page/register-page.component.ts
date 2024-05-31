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
  public errorPassword = false;

  public myForm: FormGroup = this.fb.group({
    dni: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    posicionPista: ['', [Validators.required]],
    tallaCamiseta: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password_confirmation: ['', [Validators.required, Validators.minLength(4)]],
    categoria: ['', [Validators.required]],
    genero: ['', [Validators.required]],
    accept: ['', [Validators.requiredTrue]],
  });

  register() {
    let errors = false;
    if (this.checkConfirmPassword(this.myForm.value.password, this.myForm.value.password_confirmation)) {
      this.errorPassword = true;
      errors = true;
    } else {
      this.errorPassword = false;
    }
    if (!errors) {
      this.authService.register(this.myForm.value)
        .subscribe((resp) => {
          if (resp.status) {
            this.myForm.reset();
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
    }
  }

  checkConfirmPassword(password: string, passwordConfirm: string): boolean {

    if (password !== passwordConfirm) {
      return true;
    }
    return false;
  }



}
