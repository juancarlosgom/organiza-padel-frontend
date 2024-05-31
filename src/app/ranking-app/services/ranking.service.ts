import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() { }

  getPlayers(): Observable<any> {
    const token = localStorage.getItem('token');
    //Autorización para backend
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}/get-players`;
    return this.http.get(url, { headers });
  }


}
