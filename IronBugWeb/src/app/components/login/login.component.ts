import { ServerRankingService } from './../../server/server-ranking.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno, Profe, Ranking } from 'src/app/interfaces/interfaz';
import { ServiceService } from 'src/app/server/service.service';
import { ServerProfesorService } from 'src/app/server/server-profesor.service';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {
  ServiceService: any;
  route: ActivatedRoute;
  alumnosArray = [];
  alumno!:FormGroup;

  datosUsuario: any={
    id_profesor: 0,
    id_alumno: 0,
    nick: "",
    fname:"" ,
    lname:"" ,
    fecha:"" ,
    centro:"" ,
    mail:"" ,
    pssw:"",
    psswConf:"",
  }
  alumnos:Alumno|any = {
    id_alumno: 0,
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
  profe!:FormGroup;

  profes:Profe|any = {
    id_profesor: 0,
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
    cont_r: 0
  }


  constructor(private formBuilder: FormBuilder, private router: Router, route: ActivatedRoute, ServiceService: ServiceService,private serverProfesorService: ServerProfesorService, private serverAlumnoService: ServerAlumnoService, private serverRankingService: ServerRankingService){
    this.formBuilder = formBuilder;
    this.ServiceService = ServiceService;
    this.route = route;
    this.router = router;
  };

  ngOnInit() : void {
    this.profe =  this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pssw: ['', [Validators.required,Validators.minLength(8)]],
    });
    this.alumno =  this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pssw: ['', [Validators.required,Validators.minLength(8)]],
    });
    console.log(this.ServiceService);

    this.ranking = {
      id_r: Number(this.route.snapshot.paramMap.get('id_r')),
      name_r: String(this.route.snapshot.paramMap.get('name_r')),
      cont_r: Number(this.route.snapshot.paramMap.get('cont_r'))
    }

  }

  get data() {
      if(this.profe){
      return this.profe.controls;
    }else{
      return this.alumno.controls;
    }
  }



  //  onSubmit() {
  //   if(this.profe){
  //     this.listarProfesor();
  //   }else{
  //     this.listarAlumno();
  //     }
  //   }

  //Funcion para conectar con el php
  listarProfesor(){

    this.profesorInicio.mail =  this.profes.mail;
    this.profesorInicio.pssw = this.profes.pssw;



    this.serverProfesorService.listarProfesor(this.profesorInicio).subscribe(
      datos  => {
        this.datosUsuario = datos;
        if(this.datosUsuario.centro){
          this.router.navigate(['pprofe', datos]);
        }else {
          console.log(datos);
          this.router.navigate(['palumno', datos]);
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

    this.alumnoInicio.mail =  this.alumnos.mail;
    this.alumnoInicio.pssw = this.alumnos.pssw;

    this.serverAlumnoService.listarAlumno(this.alumnoInicio).subscribe(
      datos  => {
        this.router.navigate(['palumno', datos]);
      }
    );

  }

  listarRanking(){
    this.serverRankingService.listarRanking(this.ranking).subscribe(
        datos => {
          this.router.navigate(['palumno',datos]);
        }
      );
  }


  volver(){
    this.router.navigate(['']);
  }
  registerProfe(){
    this.router.navigate(['rprofe']);
  }
  registerAlumno(){
    this.router.navigate(['ralumno']);
  }

}
