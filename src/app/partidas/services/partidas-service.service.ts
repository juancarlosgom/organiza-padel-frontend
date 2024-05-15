import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { OpenGames } from '../interfaces/openGames.interfaces';


interface ApiResponse {
  status: string;
  gamesOpen: OpenGames[];
}

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() { }

  /*getDate(dias: number): Observable<any> {
    const url = `${this.baseUrl}/get-date`;
    const token = localStorage.getItem('token');
    //Autorización para backend
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post(url, [dias], { headers });
  }*/

  getDateUpdate(fecha: string): Observable<any> {
    const url = `${this.baseUrl}/get-fecha`;
    const token = localStorage.getItem('token');
    //Autorización para backend
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post(url, [fecha], { headers });
  }

  reserveTrack(horaInicio: string, horaFin: string, idPista: number,
    fecha: string, searchGame: boolean, genero: string): Observable<any> {
    const url = `${this.baseUrl}/reserve-track`;
    const token = localStorage.getItem('token');
    //Autorización para backend
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post(url, [horaInicio, horaFin, idPista, fecha, searchGame, genero], { headers });
  }

  getGamesOpen(): Observable<any> {
    const url = `${this.baseUrl}/get-game-open`;
    const token = localStorage.getItem('token');
    //Autorización para backend
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(url, '', { headers });
  }

  signUpGame(idPartida: number, numberPlayer: number): Observable<any> {
    const url = `${this.baseUrl}/sign-up-game`;
    const token = localStorage.getItem('token');
    //Autorización para backend
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post(url, [idPartida, numberPlayer], { headers });
  }


  // Método para avanzar un día
  /*avanzarDia(diasMas: number) {
    return this.getDate(diasMas);
  }

  // Método para retroceder un día
  retrocederDia(diasMenos: number) {
    return this.getDate(diasMenos);
  }*/





}
