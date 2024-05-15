import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environments';
import { AuthServiceService } from '../../services/auth-service.service';

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

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  login(): void {

    console.log('Login');
    const { email, password } = this.myForm.value;
    this.authService.login(email, password).
      subscribe({
        //next: () => this.router.navigateByUrl('/auth/login'),
        next: (resp) => {
          this.tokenUser = resp.token,
            localStorage.setItem('token', this.tokenUser!),
            console.log('Logueado: '),
            window.location.reload();
        },
        error: (errorMessage) => {
          console.log("Se dispara el error" + errorMessage);
        }
      });
    this.myForm.reset();
  }

}
