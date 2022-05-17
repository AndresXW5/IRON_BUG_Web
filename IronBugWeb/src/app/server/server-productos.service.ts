import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito, Productos } from '../interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServerProductosService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  productos: Productos [] | any = {
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
  }


  listarProducto(productos: Productos){
    // console.log("Service de productos", productos);
    return this.http.post(`${this.URL}productos/listarProductos.php`,JSON.stringify(productos));
  }

  //Añadir Producto a carrito
  anadirProd( id_user: number, id_Producto: Productos, nombre: Productos, precio: Productos){
    this.productos = id_Producto;

    // console.log("Service de productos/nombre", nombre);
    // console.log("Service de productos/precio", precio);
    return this.http.get(`${this.URL}productos/insertarProd.php?id_user=${id_user}&id_r=${id_Producto.id}&nombre=${id_Producto.nombre}&precio=${id_Producto.precio}`);
  }

  listarHistorial(id_usuaro: number){
    console.log("IdUser en Seervice", id_usuaro);
    return this.http.get(`${this.URL}productos/listarHistorial.php?id_alumno=${id_usuaro}`);
  }





}
