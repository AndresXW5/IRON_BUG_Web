import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto, Ranking } from './interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServerRankingService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  listarProducto(producto: producto) {
     console.log("Ranking en service: ", producto);
    return this.http.post(`${this.URL}productos/productos.php`,JSON.stringify(producto));
  }

  listarRanking(Ranking: Ranking) {
    // console.log("Ranking en service: ", ranking);
    return this.http.post(`${this.URL}ranking/listarRanking.php`,JSON.stringify(Ranking));
  }

  listarTodoRanking(Ranking: Ranking) {
    return this.http.post(`${this.URL}ranking/listarTodosRanking.php`,JSON.stringify(Ranking));
  }

  // listarTodoRanking(ranking: Ranking){
  //   return this.http.get(`${this.URL}ranking/listarRanking.php`,JSON.stringify(ranking));
  // }

  unirseRanking(codigo: any){
    console.log("_____",codigo);
    return this.http.get(`${this.URL}ranking/unirseRanking.php?codigo=${codigo}` );
  }

  anadirRanking(id_r: any, id_usuario: any, name_r: any, codigo: any){
    let ranking: Ranking = {
      id_r: id_r,
      id_usuario: id_usuario,
      name_r: name_r,
      codigo: codigo,
    }
    // console.log(ranking);
    return this.http.post(`${this.URL}ranking/insertarRanking.php`,JSON.stringify(ranking));
  }

}
