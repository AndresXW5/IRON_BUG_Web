import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { ServerRankingService } from '../articulos.service'; 
import {producto } from '../interfaces/interfaz';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  

  router: Router;
  route: ActivatedRoute;
  constructor(router: Router, route: ActivatedRoute, private articulosServicio: ServerRankingService) { 
    this.route = route;
    this.router = router;
  }
productos: producto={
    nombre: "",
    descripcion: "",
    precio: 0
  }
  productosArray: [] | any;
  ngOnInit(): void {
    
     this.productos = {
      nombre: String(this.route.snapshot.paramMap.get('nombreprod')),
      descripcion: String(this.route.snapshot.paramMap.get('descripcion')),
      precio: Number(this.route.snapshot.paramMap.get('precio'))
           };
           this.articulosServicio.listarProducto(this.productos).subscribe(
            (datos: any) => {console.log("a", this.productos);
              console.log("lISTAR ORIGINAL",this.productos);// NO llega
              this.productosArray = datos;
            }
            
          );


  }
 
  

  }
 
 
  

  

