import { Injectable } from '@angular/core';
import { Profe,Alumno } from '../interfaces/interfaz';
import Cuentas from '../json/cuentas.json';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService{

  // public profesores: Profe[] = Cuentas;

  constructor(){
  }
  

  // getUsuarios() {
  //   return this.profesores;
  // }

  // getUserById(id: number) {
  //   return this.profesores.find(profesor => profesor.id === id);
  // }

  // deleteUserById(id: number) {
  //   return this.profesores = this.profesores.filter(profesor => profesor.id !== id);
  // }

  // incrementar(){
  //   let id = 0;
  //   this.profesores.forEach(profesor => {
  //     if (profesor.id >= id) {
  //       id = profesor.id +1;
  //     }
  //   });
  //   return id;
  // }

  // push(profesor: Profe){
  //   this.profesores.push(profesor);
  // }
}
