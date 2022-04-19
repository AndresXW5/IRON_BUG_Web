import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profe } from '../interfaces/interfaz';


@Injectable({
  providedIn: 'root'
})
export class ServerProfesorService {

  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }



  listarProfesor(profesor: any) {
    return this.http.post(`${this.URL}profesores/listarProfesor.php`,JSON.stringify(profesor));
  }


  // eliminarProfesor(nombreProfesor) {
  //   return this.http.get(`${this.URL}eliminarProfesor.php?nombreProfesor=${nombreProfesor}`);
  // }

  modificarProfesor(profe:Profe) {

    console.log(profe);
    return this.http.post(`${this.URL}profesores/modificarProfesor.php`,JSON.stringify(profe));
  }


  insertarProfesor(id_profesor: any, nick: any, fname: any, lname: any, mail: any, centro: any, pssw: any, psswConf: any, avatar: any){
    let profes: Profe = {
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
    return this.http.post(`${this.URL}profesores/insertarProfesor.php`,JSON.stringify(profes));
  }
  editarImagen(profe: any){

    return this.http.post(`${this.URL}profesores/modificarProfesor.php`,JSON.stringify(profe));
  }
  // modificarProfesorEquipos(nombreProfesor, modoEquipos){
  //   return this.http.get(`${this.URL}modificarProfesorEquipos.php?nombreProfesor=${nombreProfesor}&modoEquipos=${modoEquipos}`);

  // }

  // modificarProfesor(){
  //   return this.http.post(`${this.URL}profesores/modificarProfesor.php`,JSON.stringify(profes));
  // }


}

