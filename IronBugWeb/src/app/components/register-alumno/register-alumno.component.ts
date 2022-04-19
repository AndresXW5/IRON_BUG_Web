import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Alumno} from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { PasswordValidator } from 'src/app/validator/password.validator';

@Component({
  selector: 'app-register-alumno',
  templateUrl: './register-alumno.component.html',
  styleUrls: ['./register-alumno.component.css']
})
export class RegisterAlumnoComponent implements OnInit {
  alumnosArray = [];
  alumno!:FormGroup;
  submitted = false;
  ServiceService: any;
  isValidFormSubmitted = false;

  alumnos:Alumno = {
    id_alumno: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    fecha:"",
    mail:"" ,
    pssw:"" ,
    psswConf: "",
    avatar: ""
  }

  alumnoParam: any;

  constructor(private formBuilder: FormBuilder, private router: Router, ServiceService: ServiceService, private serverAlumnoService: ServerAlumnoService, private http: HttpClient){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;

  };
   ngOnInit(): void {
      this.alumno =  this.formBuilder.group( {
        nick:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
        fname:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]],
        lname:['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$') ]],
        fecha:['', [Validators.required ]],
        mail:['', [Validators.required, Validators.email]],
        pssw:['', [Validators.required, Validators.minLength(8)]],
        psswConf:['', [Validators.required, Validators.minLength(8)]],

    }, {
      validator: PasswordValidator('pssw', 'psswConf')
    });


  }

  onSubmit() {
    this.registrarAlumno();
  }

  //Funcion para conectar con el php
  registrarAlumno(){

    this.serverAlumnoService.insertarAlumnos(this.alumnos.id_alumno,this.alumnos.nick, this.alumnos.fname, this.alumnos.lname, this.alumnos.mail, this.alumnos.fecha, this.alumnos.pssw, this.alumnos.psswConf, this.alumnos.avatar).subscribe(
      datos  => this.alumnoParam = datos
      );
    this.router.navigate(['login']);
  }
  get data() { return this.alumno.controls; }


  volver(){

    this.router.navigate(['']);
  }
  login(){

    this.router.navigate(['login']);
  }
}
