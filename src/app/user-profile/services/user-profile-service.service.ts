import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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


}
