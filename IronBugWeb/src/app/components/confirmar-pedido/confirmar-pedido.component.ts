import { ServerProductosService } from './../../server/server-productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerUserService } from 'src/app/server/server-user.service';
import { Productos, Usuario } from 'src/app/interfaces/interfaz';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrls: ['./confirmar-pedido.component.css']
})
export class ConfirmarPedidoComponent implements OnInit {

  router: Router;
  route: ActivatedRoute;
  name_r  = '';
  algo: Object | undefined;
  rankingTodo: any;


  constructor(router: Router, route: ActivatedRoute, private service: ServerUserService, private ServerProductosService: ServerProductosService) {

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

  modificarAlumno: any = {
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

  historialArray: [] | any = {
    id_linea: 0,
    id_prod: 0,
    id_user: 0,
    nombre_prod: "",
    precio: 0,
  }

  id_Producto : Productos = this.productos;

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

          console.log("ID User(TS)", this.usuario.id_usuario);

          this.ServerProductosService.listarHistorial(this.usuario.id_usuario).subscribe(
            (datos: any) => {
              this.historialArray = datos;

              console.log("ArrayHistProd", this.historialArray);
            }
          );
    }

    //Funciones ↓↓↓

      volver(){
        localStorage.clear();
        this.router.navigate(['palumno', this.usuario]);
      }
      carrito(){
        this.router.navigate(['productos', this.usuario]);
      }

      confirmar(){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Compra realizada correctamente!"',
        })
        this.router.navigate(['palumno', this.usuario]);
      }

      editar(){
        this.router.navigate(['editar-alumno', this.usuario]);
      }

      id_eliminar: number = 0;

      eliminarProd(cont: number){
        this.productos = this.historialArray[cont];
        console.log('Array', this.historialArray[cont]);
        console.log('Prod', this.productos[1])

        this.id_eliminar = this.productos[1];
        console.log('ID', this.id_eliminar);

        this.ServerProductosService.eliminarProd(this.usuario.id_usuario, this.id_eliminar).subscribe(
          datos => {
            console.log(this.productos.id);

          }
        )

          Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto eliminado correctamente del carrito!"',
          showConfirmButton: false,
          timer: 1300
        })

        //Se actualiza en x segundos
        setTimeout('window.location.reload()',1300);
      }

}
