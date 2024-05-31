import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() { }

  register(valoresFormulario: FormGroup): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, valoresFormulario);
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const body = { email, password };
    return this.http.post<any>(url, body);
  }
}
