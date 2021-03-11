import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  getListaLembretes(): Observable<Lembrete[]>
  {
    return this.http.get<Lembrete[]>(`${environment.ApiUrl}/lembrete`);
  }

  getLembrete(id: number): Observable<Lembrete>
  {
    return this.http.get<Lembrete>(`${environment.ApiUrl}/lembrete/${id}`);
  }

  addLembrete(lembrete: Lembrete): Observable<Lembrete>
  {
    return this.http.post<Lembrete>(`${environment.ApiUrl}/lembrete/`, lembrete);
  }

  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete>
  {
    return this.http.put<Lembrete>(`${environment.ApiUrl}/lembrete/`, lembrete);
  }

  deleteLembrete(id: number): Observable<Lembrete>
  {
    return this.http.delete<Lembrete>(`${environment.ApiUrl}/lembrete/${id}`);
  }
}
