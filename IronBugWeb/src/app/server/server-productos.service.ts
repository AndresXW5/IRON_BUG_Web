import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServerProductosService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  listarProducto(productos: Productos){
    console.log("Service de productos", productos);
    return this.http.post(`${this.URL}productos/listarProductos.php`,JSON.stringify(productos));
  }


}
