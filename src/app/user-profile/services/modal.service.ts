import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddResultGameComponent } from '../components/add-result-game/add-result-game.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private matDialog = inject(MatDialog);
  private http = inject(HttpClient);

  private readonly baseUrl = environment.baseUrl;

  constructor() { }

  openModal(players: number[], idGame: number): void {
    this.matDialog.open(AddResultGameComponent, {
      width: '900px',
      disableClose: true,
      data: { players, idGame }
    });
  }

  closeModal(): void {
    this.matDialog.closeAll();
  }

  /*getDataUser(): Observable<any> {
    const url = `${this.baseUrl}/get-user`;
    const token = localStorage.getItem('token');
    //Autorización para backend
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post(url, '', { headers });
  }*/
  getDataGame(idGame: number): Observable<any> {
    const url = `${this.baseUrl}/get-data-game`;
    const token = localStorage.getItem('token');
    //Autorización para backend
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post(url, idGame, { headers });
  }

  addResult(data: FormGroup, idPartida: number, player: string): Observable<any> {
    const url = `${this.baseUrl}/add-result-game`;
    const token = localStorage.getItem('token');
    //Autorización para backend
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post(url, [data, idPartida, player], { headers });
  }
}
