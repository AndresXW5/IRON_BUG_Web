import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/interfaz';
import { ServerUserService } from 'src/app/server/server-user.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editar-alumno-en',
  templateUrl: './editar-alumno-en.component.html',
  styleUrls: ['./editar-alumno-en.component.css']
})
export class EditarAlumnoEnComponent implements OnInit {
  router: Router;
  route: ActivatedRoute;
  alums!: FormGroup;
  usuario: Usuario = {
    id_usuario: 0,
    nick: '',
    fname: "",
    lname: "",
    mail: "",
    fecha: "",
    pssw: "",
    psswConf: "",
    avatar: ""

  }
  ServerUserService: any;
  alumnos: any;

  constructor(router: Router, route: ActivatedRoute, ServerUserService: ServerUserService, private  formBuilder: FormBuilder) {

    this.route = route;
    this.router = router;
    this.ServerUserService = ServerUserService;

  }

  ngOnInit(): void {
    this.usuario = {
      id_usuario: Number(this.route.snapshot.paramMap.get('id_admin')),
      fname: String(this.route.snapshot.paramMap.get('fname')),
      lname: String(this.route.snapshot.paramMap.get('lname')),
      nick: String(this.route.snapshot.paramMap.get('nick')),
      mail: String(this.route.snapshot.paramMap.get('mail')),
      fecha: String(this.route.snapshot.paramMap.get('fecha')),
      pssw: String(this.route.snapshot.paramMap.get('pssw')),
      psswConf: String(this.route.snapshot.paramMap.get('psswConf')),
      avatar: String(this.route.snapshot.paramMap.get('avatar'))

  };

  this.alums = this.formBuilder.group({
    fname: [''],
    lname: [''],
    nick: [''],
    mail: [''],
    fecha: ['']
   });

   this.alums = new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    nick: new FormControl('',[Validators.required]),
    mail: new FormControl('',[Validators.required]),
    fecha: new FormControl('',[Validators.required]),
  });
  }
  onSubmit() {
    this.modificarAlumno();

  }

  modificarAlumno(){
    let usuario: Usuario = {
      id_usuario: this.usuario.id_usuario,
      nick: this.usuario.nick,
      fname: this.usuario.fname,
      lname: this.usuario.lname,
      fecha: this.usuario.fecha,
      mail: this.usuario.mail,
      pssw: '',
      psswConf: '',
      avatar: ''
    }
    this.ServerUserService.modificarAlumno(usuario).subscribe(
      (datos: string) => {
        if (datos == 'OK') {
          console.log('ok');
        }else{
          console.log('nooo');
        }
      }
    );
    this.router.navigate(['palumno-en', this.usuario]);
  }
  // get data() { return this.profe.controls; }
  editar(){
    this.router.navigate(['editar-alumno']);
  }

  volver(){
    this.router.navigate(['palumno-en',this.usuario]);
    }
}
