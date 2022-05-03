import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario, Ranking } from '../interfaces/interfaz';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';


@Injectable({
  providedIn: 'root'
})
export class ServerAlumnoService {


  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }



  listarAlumno(params: any) {
    return this.http.post(`${this.URL}usuarios/listarUser.php`,JSON.stringify(params));
  }

  // eliminarProfesor(nombreProfesor) {
  //   return this.http.get(`${this.URL}eliminarAdmin.php?nombreProfesor=${nombreProfesor}`);
  // }
  modificarAlumno(usuario: Usuario) {
   console.log(usuario);

    return this.http.post(`${this.URL}usuarios/modificarUser.php`,JSON.stringify(usuario));
  }

  unirseRanking(ranking:Ranking){

    return this.http.post(`${this.URL}ranking/unirseRanking.php`,JSON.stringify(ranking));
  }


  //Registrar nuevo usuario
  insertarAlumnos(id_alumno: any, nick: any, fname: any, lname: any, mail: any, fecha: any, pssw: any, psswConf: any, avatar: any){
    let usuarios: Usuario = {
      id_alumno: id_alumno,
      nick: nick,
      fname: fname,
      lname: lname,
      fecha: fecha,
      mail: mail,
      pssw: pssw,
      psswConf: psswConf,
      avatar: avatar
    }
    return this.http.post(`${this.URL}usuarios/insertarUser.php`,JSON.stringify(usuarios));
  }

  editarImagen(usuario: any){
    return this.http.post(`${this.URL}usuarios/modificarUser.php`,JSON.stringify(usuario));
  }

  // modificarProfesorEquipos(nombreProfesor, modoEquipos){
  //   return this.http.get(`${this.URL}modificarProfesorEquipos.php?nombreProfesor=${nombreProfesor}&modoEquipos=${modoEquipos}`);

  // }




}
