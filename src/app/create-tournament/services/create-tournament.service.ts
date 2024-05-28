import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTournamentService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() { }

  addTournament(valuesForm: FormData): Observable<any> {
    const url = `${this.baseUrl}/add-tournament`;
    const token = localStorage.getItem('token');
    const admin = localStorage.getItem('admin')?.toString();
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    console.log(valuesForm);
    valuesForm.append('admin', admin!);
    return this.http.post<any>(url, valuesForm, { headers });
  }

}
