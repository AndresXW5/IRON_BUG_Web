import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrega, Admin, Ranking} from '../interfaces/interfaz';


@Injectable({
  providedIn: 'root'
})
export class ServerProfesorService {


  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  listarProfesor(profesor: any) {
    return this.http.post(`${this.URL}admin/listarAdmin.php`,JSON.stringify(profesor));
  }



  //////             ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓      No tocado aun       ////////


  // eliminarProfesor(nombreProfesor) {
  //   return this.http.get(`${this.URL}eliminarAdmin.php?nombreProfesor=${nombreProfesor}`);
  // }

  modificarProfesor(admin:Admin) {

    console.log(admin);
    return this.http.post(`${this.URL}admin/modificarAdmin.php`,JSON.stringify(admin));
  }


  insertarProfesor(id_profesor: any, nick: any, fname: any, lname: any, mail: any, centro: any, pssw: any, psswConf: any, avatar: any){
    let admin_: Admin = {
      id_profesor: id_profesor,
      nick: nick,
      fname: fname,
      lname: lname,
      centro: centro,
      mail: mail,
      pssw: pssw,
      psswConf: psswConf,
      avatar: avatar
    }
    return this.http.post(`${this.URL}admin/insertarAdmin.php`,JSON.stringify(admin_));
  }
  editarImagen(admin: any){

    return this.http.post(`${this.URL}admin/modificarAdmin.php`,JSON.stringify(admin));
  }

  // anadirRanking(ranking:Ranking){
  //   console.log(ranking);
  //   return this.http.post(`${this.URL}ranking/insertarRanking.php`,JSON.stringify(ranking));
  // }
  anadirRanking(name_r: any, codigo: number){
    let ranking: Ranking = {
      id_r: 0,
      //id_alumno: id_alumno,
      name_r: name_r,
      codigo: codigo,
    }
    return this.http.post(`${this.URL}ranking/insertarRanking.php`,JSON.stringify(ranking));
  }

  anadirEntrega(nombre: any){
    let entrega: Entrega = {
      id: 0,
      nombre: nombre,
      puntos: 0
    }
    return this.http.post(`${this.URL}entregas/insertarEntrega.php`,JSON.stringify(entrega));
  }

  // modificarProfesorEquipos(nombreProfesor, modoEquipos){
  //   return this.http.get(`${this.URL}modificarProfesorEquipos.php?nombreProfesor=${nombreProfesor}&modoEquipos=${modoEquipos}`);

  // }

  // modificarProfesor(){
  //   return this.http.post(`${this.URL}admin/modificarProfesor.php`,JSON.stringify(profes));
  // }


}

