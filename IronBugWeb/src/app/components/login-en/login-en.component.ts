import { ServerRankingService } from './../../server/server-ranking.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario, Admin, Ranking } from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { ServerProfesorService } from 'src/app/server/server-profesor.service';
import { ServerUserService } from 'src/app/server/server-user.service';

@Component({
  selector: 'app-login-en',
  templateUrl: './login-en.component.html',
  styleUrls: ['./login-en.component.css']
})
export class LoginEnComponent implements OnInit {

  ServiceService: any;
  route: ActivatedRoute;
  alumnosArray = [];
  usuario!:FormGroup;

  datosUsuario: any={
    id_admin: 0,
    id_usuario: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    fecha:"" ,
    centro:"" ,
    mail:"" ,
    pssw:"",
    psswConf:"",
  }
  usuarios: Usuario|any = {
    id_usuario: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    fecha:"" ,
    mail:"" ,
    pssw:"",
    psswConf:"",
  }
  alumnoInicio = {
    mail:"" ,
    pssw:""
  }
  alumnoParam: any;

  profesArray = [];
  admin!:FormGroup;

  admin_:Admin|any = {
    id_admin: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    centro:"" ,
    mail:"" ,
    pssw:"",
    psswConf:"",
  }
  profesorInicio = {
    mail:"" ,
    pssw:""
  }
  profesores: any;

  ranking: Ranking = {
    id_r: 0,
    name_r: "",
    codigo: 0
  }


  constructor(private formBuilder: FormBuilder, private router: Router, route: ActivatedRoute, ServiceService: ServiceService,private serverProfesorService: ServerProfesorService, private ServerUserService: ServerUserService, private serverRankingService: ServerRankingService){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;
    this.route = route;
    this.router = router;
  };

  ngOnInit() : void {
    this.admin =  this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pssw: ['', [Validators.required,Validators.minLength(8)]],
    });
    this.usuario =  this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pssw: ['', [Validators.required,Validators.minLength(8)]],
    });
    console.log(this.ServiceService);

    // this.ranking = {
    //   id_r: Number(this.route.snapshot.paramMap.get('id_r')),
    //   name_r: String(this.route.snapshot.paramMap.get('name_r')),
    //   cont_r: Number(this.route.snapshot.paramMap.get('cont_r'))
    // }

  }

  get data() {
      if(this.admin){
      return this.admin.controls;
    }else{
      return this.usuario.controls;
    }
  }

  //Funcion para conectar con el php
  listarProfesor(){
    this.profesorInicio.mail =  this.admin_.mail;
    this.profesorInicio.pssw = this.admin_.pssw;

    this.serverProfesorService.listarProfesor(this.profesorInicio).subscribe(
      datos  => {
        this.datosUsuario = datos;
        if(this.datosUsuario.centro){
          this.router.navigate(['pprofe', datos]);
        }else {
          console.log(datos);
          this.router.navigate(['palumno-en', datos]);
        }
      }
  )
      // this.serverRankingService.listarRanking(this.ranking).subscribe(
      //   datos => {
      //     this.router.navigate(['palumno',datos]);
      //   }
      // );
  }

  listarAlumno(){

    this.alumnoInicio.mail =  this.usuarios.mail;
    this.alumnoInicio.pssw = this.usuarios.pssw;

    this.ServerUserService.listarAlumno(this.alumnoInicio).subscribe(
      datos  => {
        this.router.navigate(['palumno-en', datos]);
      }
    );

  }

  listarRanking(){
    this.serverRankingService.listarRanking(this.ranking).subscribe(
        datos => {
          this.router.navigate(['palumno-en',datos]);
        }
      );
  }


  volver_en(){
    this.router.navigate(['home-en']);
  }
  registerProfe(){
    this.router.navigate(['rprofe']);
  }
  registerAlumno_en(){
    this.router.navigate(['ralumno-en']);
  }

}
