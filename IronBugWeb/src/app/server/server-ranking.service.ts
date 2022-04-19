import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ranking } from '../interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServerRankingService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  listarRanking(ranking: Ranking) {
    return this.http.post(`${this.URL}ranking/listarRanking.php`,JSON.stringify(ranking));
  }



}
