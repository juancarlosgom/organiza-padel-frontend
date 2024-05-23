import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserProfileServiceService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() { }

  logoutUser(): Observable<any> {
    const token = localStorage.getItem('token');
    //Autorización para backend
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}/logout`;
    return this.http.post(url, token, { headers });
  }

  getUserData(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/get-user`;
    return this.http.post(url, token, { headers });
  }

  updateDataUser(valueForm: FormGroup): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/update-data-user`;
    return this.http.put(url, valueForm, { headers });
  }

  getGamesUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/get-games-user`;
    return this.http.get(url, { headers });
  }

  deleteReserve(idReserve: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/delete-reserve`;
    return this.http.post(url, idReserve, { headers });
  }

  deleteUserOpenGame(idGame: number, player: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/delete-user-open-game`;
    return this.http.post(url, [idGame, player], { headers });
  }

  getIdUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/get-id-user`;
    return this.http.get(url, { headers });
  }

  getAdminGames(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/get-admin-games`;
    return this.http.get(url, { headers });
  }

  getConfirmGamesUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/get-confirm-games`;
    return this.http.get(url, { headers });
  }

  confirmResult(idResult: number, player: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/add-confirm-game`;
    return this.http.post(url, [idResult, player], { headers });
  }

  getHistoryUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/get-history-user`;
    return this.http.get(url, { headers });
  }

  getStatisticsUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/get-statistics-user`;
    return this.http.get(url, { headers });
  }

}
