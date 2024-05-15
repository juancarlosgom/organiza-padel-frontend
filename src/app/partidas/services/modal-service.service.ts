import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearPartidaComponent } from '../components/crear-partida/crear-partida.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  private matDialog = inject(MatDialog);
  private http = inject(HttpClient);

  private readonly baseUrl = environment.baseUrl;

  constructor() { }

  openModal(startingHour: string, endHour: string, idTrack: number, date: string): void {
    this.matDialog.open(CrearPartidaComponent, {
      width: '900px',
      disableClose: true,
      data: { startingHour, endHour, idTrack, date }
    });
  }

  closeModal(): void {
    this.matDialog.closeAll();
  }

  getDataUser(): Observable<any> {
    const url = `${this.baseUrl}/get-user`;
    const token = localStorage.getItem('token');
    //Autorización para backend
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.post(url, '', { headers });
  }
}
