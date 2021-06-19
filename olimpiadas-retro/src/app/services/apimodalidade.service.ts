import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalidadesModel } from './modalidades-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApimodalidadeService {

  constructor(private http: HttpClient) { }

  private apiURL = 'https://it3-klj-default-rtdb.firebaseio.com/olimpiadasModalidades.json';

  public get(): Observable<ModalidadesModel[]>{
    return this.http.get<ModalidadesModel[]>(this.apiURL)
  }
}
