import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Admin } from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/validator/password.validator';
import { HttpClient } from '@angular/common/http';
import { ServerProfesorService } from 'src/app/server/server-profesor.service';

@Component({
  selector: 'app-register-profe',
  templateUrl: './register-profe.component.html',
  styleUrls: ['./register-profe.component.css']
})
export class RegisterProfeComponent implements OnInit {
  profesArray = [];
  admin!:FormGroup;
  submitted = false;
  ServiceService: any;
  isValidFormSubmitted = false;

  admin_:Admin = {
    id_admin: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    centro:"" ,
    mail:"" ,
    pssw:"" ,
    psswConf: "",
    avatar : ""

  }
  profesores: any;


  constructor(private formBuilder: FormBuilder, private router: Router, ServiceService: ServiceService, private serverProfesorService: ServerProfesorService, private http: HttpClient){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;

  };
  ngOnInit(): void {
    this.admin =  this.formBuilder.group( {
      nick:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
      fname:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]],
      lname:['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$') ]],
      centro:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
      mail:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      pssw:['', [Validators.required, Validators.minLength(8)]],
      psswConf:['', [Validators.required, Validators.minLength(8)]]

    }, {
      validator: PasswordValidator('pssw', 'psswConf')
    });

    //Se llama a la funcion registrarProfesor


  }
   onSubmit() {
    this.registrarProfesor();

}

  //Funcion para conectar con el php
  registrarProfesor(){
    this.serverProfesorService.insertarProfesor(this.admin_.id_admin,this.admin_.nick, this.admin_.fname, this.admin_.lname, this.admin_.mail, this.admin_.centro, this.admin_.pssw, this.admin_.psswConf,this.admin_.avatar).subscribe(
      datos  => this.profesores = datos
    );
 this.router.navigate(['login']);
  }
  get data() { return this.admin.controls; }


  volver(){

    this.router.navigate(['']);
  }
  login(){

    this.router.navigate(['login']);
  }
}


