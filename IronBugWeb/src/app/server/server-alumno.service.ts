import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../interfaces/interfaz';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';


@Injectable({
  providedIn: 'root'
})
export class ServerAlumnoService {


  URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }



  listarAlumno(params: any) {
    return this.http.post(`${this.URL}alumnos/listarAlumnos.php`,JSON.stringify(params));
  }

  // eliminarProfesor(nombreProfesor) {
  //   return this.http.get(`${this.URL}eliminarProfesor.php?nombreProfesor=${nombreProfesor}`);
  // }
  modificarAlumno(alumno:Alumno) {
   console.log(alumno);

    return this.http.post(`${this.URL}alumnos/modificarAlumnos.php`,JSON.stringify(alumno));
  }

  insertarAlumnos(id_alumno: any, nick: any, fname: any, lname: any, mail: any, fecha: any, pssw: any, psswConf: any, avatar: any){
    let alumnos: Alumno = {
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
    return this.http.post(`${this.URL}alumnos/insertarAlumnos.php`,JSON.stringify(alumnos));
  }
  editarImagen(alumno: any){

    return this.http.post(`${this.URL}alumnos/modificarAlumnos.php`,JSON.stringify(alumno));
  }

  // modificarProfesorEquipos(nombreProfesor, modoEquipos){
  //   return this.http.get(`${this.URL}modificarProfesorEquipos.php?nombreProfesor=${nombreProfesor}&modoEquipos=${modoEquipos}`);

  // }




}
