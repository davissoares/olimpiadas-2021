import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RankingModel } from './rankingmodel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiRankingService {

  constructor(private http: HttpClient) {  }

  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/olimpiadasMedalhas.json?print=pretty'

  public get(): Observable<RankingModel[]> {
    return this.http.get<RankingModel[]>(this.apiUrl)
  }

}
