import { ServerProductosService } from './../../server/server-productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos, Usuario } from 'src/app/interfaces/interfaz';
import Swal from 'sweetalert2';

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

  usuario: Usuario = {
    id_usuario: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    fecha: "",
    pssw: "",
    psswConf: "",
    avatar: ""
  }

  productos: Productos [] | any = {
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,

  }



  id_Producto : Productos = this.productos;

  // productosArray: [] | any;

  ngOnInit(): void {
    this.usuario = {
      id_usuario: Number(this.route.snapshot.paramMap.get('id_usuario')),
       fname: String(this.route.snapshot.paramMap.get('fname')),
       lname: String(this.route.snapshot.paramMap.get('lname')),
       nick: String(this.route.snapshot.paramMap.get('nick')),
       mail: String(this.route.snapshot.paramMap.get('mail')),
       fecha: String(this.route.snapshot.paramMap.get('fecha')),
       pssw: String(this.route.snapshot.paramMap.get('pssw')),
       psswConf: String(this.route.snapshot.paramMap.get('psswConf')),
       avatar: String(this.route.snapshot.paramMap.get('avatar'))
     };

    //  this.productos = {
    //   id: Number(this.route.snapshot.paramMap.get('id')),
    //   nombre: String(this.route.snapshot.paramMap.get('nombre')),
    //  };

    this.service.listarProducto(this.productos).subscribe(
      datos => {

        this.productos = datos;

        console.log("E", this.productos);
        // console.log("En TS", this.id_Producto);
      }
    );


  }


  incremento = 0;

  agregar_carrito(cont: number){
    // this.incremento ++;
      this.id_Producto = this.productos[cont];

            this.service.anadirProd(this.usuario.id_usuario, this.id_Producto).subscribe(
              datos => {
                console.log(this.productos.id);
              }


    //   datos => {
    //           console.log("En TScarrito",this.usuario.id_usuario);
    //     if (datos == 'OK') {
    //       Swal.fire(
    //         'Correcto',
    //       )
    //     } else {
    //       Swal.fire(
    //         'Error',
    //       )

    //     }

    //  }
    )
  }

  carrito(){
    this.router.navigate(['palumno', this.usuario]);
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
