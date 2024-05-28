import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor() { }
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);


  getTournaments(): Observable<any> {
    const url = `${this.baseUrl}/get-tournaments`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(url, { headers });
  }

  singUpTournament(formsValue: FormGroup, idTournament: number): Observable<any> {
    const url = `${this.baseUrl}/sing-up-tournament`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post(url, [formsValue, idTournament], { headers });
  }

}
