import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Usuario} from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServerUserService } from 'src/app/server/server-user.service';
import { PasswordValidator } from 'src/app/validator/password.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  alumnosArray = [];
  usuario!:FormGroup;
  submitted = false;
  ServiceService: any;
  isValidFormSubmitted = false;

  usuarios: Usuario = {
    id_usuario: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    fecha:"",
    mail:"" ,
    pssw:"" ,
    psswConf: "",
    avatar: ""
  }

  usuarioParam: any;

  constructor(private formBuilder: FormBuilder, private router: Router, ServiceService: ServiceService, private ServerUserService: ServerUserService, private http: HttpClient){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;

  };
   ngOnInit(): void {
      this.usuario = this.formBuilder.group( {
        nick:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
        fname:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]],
        lname:['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$') ]],
        // fecha:['', [Validators.required ]],
        mail:['', [Validators.required, Validators.email]],
        pssw:['', [Validators.required, Validators.minLength(8)]],
        psswConf:['', [Validators.required, Validators.minLength(8)]],

    }, {
      validator: PasswordValidator('pssw', 'psswConf')
    });


  }

  onSubmit() {

        if (this.usuario.valid) {
          console.log(this.usuario.value);
          this.registrarAlumno();
        }
        else{
/////////////////////////////////

          if(this.usuarios.nick.length < 3) {
            console.log('Nick menor de 3')
        }

//////////////////////////////////
          console.log('Campos incorrectos');
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error. Revise los campos incorrectos por favor.',
            showConfirmButton: false,
            timer: 1500
          });
        }

  }

  //Funcion para conectar con el php
  registrarAlumno(){
    this.ServerUserService.insertarAlumnos(this.usuarios.id_usuario,this.usuarios.nick, this.usuarios.fname, this.usuarios.lname, this.usuarios.mail, this.usuarios.fecha, this.usuarios.pssw, this.usuarios.psswConf, this.usuarios.avatar).subscribe(
      datos  => this.usuarioParam = datos
      );
    this.router.navigate(['login']);
  }
  get data() { return this.usuario.controls; }


  volver(){

    this.router.navigate(['']);
  }
  login(){

    this.router.navigate(['login']);
  }





  infoApodo(){
      Swal.fire(
    'Apodo',
    'Este campo debe tener más de 3 caracteres.',
    'info'
    )
  }

  infoNombre(){
    Swal.fire(
    'Nombre',
    'Este campo debe tener más de 3 caracteres.',
    'info'
  )
}

infoApellido(){
    Swal.fire(
    'Apellido',
    'Este campo debe tener más de 3 caracteres.',
    'info'
  )
}

infoEmail(){
    Swal.fire(
    'Email',
    'Este campo debe tener formato de correo elctronico. Es decir, llevar el simbolo `@` como "nombre@gmail".',
    'info'
  )
}

infoContra(){
    Swal.fire(
    'Contraseña',
    'Los requisitos para la contraseña son que debera tener un minimo de 8 caracteres numéricos o alfabéticos.',
    'info'
  )
}

infoContraConf(){
    Swal.fire(
    'Confirmacion de contraseña',
    'Los requisitos para verificar la contraseña son los mismos que en contraseña.',
    'info'
  )
}











}
