import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environments';
import { AuthServiceService } from '../../services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthServiceService);
  private tokenUser?: string;
  public loading: boolean = false;

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  login(): void {
    this.loading = true;
    const { email, password } = this.myForm.value;
    this.authService.login(email, password).
      subscribe((resp) => {
        if (resp.status) {
          if (resp.admin) {
            localStorage.setItem('admin', 'isAdmin');
          }
          this.tokenUser = resp.token;
          localStorage.setItem('token', this.tokenUser!);
          window.location.reload();
        } else {
          Swal.fire({
            title: 'Email o password incorrectos',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      });
    this.myForm.reset();
  }

}
