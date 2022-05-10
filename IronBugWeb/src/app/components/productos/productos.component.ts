import { ServerProductosService } from './../../server/server-productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/interfaces/interfaz';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  router: Router;
  route: ActivatedRoute;

  constructor(router: Router, route: ActivatedRoute, private service: ServerProductosService) {
    this.route = route;
    this.router = router;

  }

  productos: Productos [] | any = {
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,

  }

  // productosArray: [] | any;

  ngOnInit(): void {

    this.service.listarProducto(this.productos).subscribe(
      datos => {

        this.productos = datos;
        console.log("En TS", this.productos);
      }
    );


  }



  carrito(){
    this.router.navigate(['palumno']);
  }

}






























// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ServerRankingService } from 'src/app/articulos.service';
// import { Productos } from 'src/app/interfaces/interfaz';

// @Component({
//   selector: 'app-productos',
//   templateUrl: './productos.component.html',
//   styleUrls: ['./productos.component.css']
// })
// export class ProductosComponent implements OnInit {

// //   router: Router;
// //   route: ActivatedRoute;
// //   constructor(router: Router, route: ActivatedRoute, private articulosServicio: ServerRankingService) {
// //     this.route = route;
// //     this.router = router;
// //   }
// // productos: Productos={
// //     id: 0,
// //     nombre: "",
// //     descripcion: "",
// //     precio: 0
// //   }
// //   productosArray: [] | any;
//   ngOnInit(): void {

//     //  this.productos = {
//     //   id: Number(this.route.snapshot.paramMap.get('id')),
//     //   nombre: String(this.route.snapshot.paramMap.get('nombre')),
//     //   descripcion: String(this.route.snapshot.paramMap.get('descripcion')),
//     //   precio: Number(this.route.snapshot.paramMap.get('precio'))
//     //     };
//     //        this.articulosServicio.listarProducto(this.productos).subscribe(
//     //         (datos: any) => {console.log("a", this.productos);
//     //           console.log("lISTAR ORIGINAL",this.productos);// NO llega
//     //           this.productosArray = datos;
//     //         }

//     //       );


//   }
// }
