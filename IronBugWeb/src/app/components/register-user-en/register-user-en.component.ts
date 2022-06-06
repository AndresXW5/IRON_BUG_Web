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
  selector: 'app-register-user-en',
  templateUrl: './register-user-en.component.html',
  styleUrls: ['./register-user-en.component.css']
})
export class RegisterUserEnComponent implements OnInit {

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
        nick:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]],
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
          if(this.usuarios.nick.length < 3) {
            console.log('Nick menor de 3')
        }
          console.log('Campos incorrectos');
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error. Check the incorrect fields please.',
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
    this.router.navigate(['login-en']);
  }
  get data() { return this.usuario.controls; }


  volver(){

    this.router.navigate(['home-en']);
  }
  login(){

    this.router.navigate(['login-en']);
  }





  infoApodo(){
      Swal.fire(
    'Nick',
    'This field must have more than 3 characters. Numeric characters are not allowed',
    'info'
    )
  }

  infoNombre(){
    Swal.fire(
    'Name',
    'This field must have more than 3 characters. Numeric characters are not allowed',
    'info'
  )
}

infoApellido(){
    Swal.fire(
    'Last name',
    'This field must have more than 3 characters. Numeric characters are not allowed',
    'info'
  )
}

infoEmail(){
    Swal.fire(
    'Email',
    'This field must be in email format. That is, carry the `@` symbol as "name@gmail".',
    'info'
  )
}

infoContra(){
    Swal.fire(
    'Password',
    'The requirements for the password are that it must have a minimum of 8 numeric or alphabetic characters.',
    'info'
  )
}

infoContraConf(){
    Swal.fire(
    'Confirm password',
    'The requirements to verify the password are the same as in password.',
    'info'
  )
}
}
