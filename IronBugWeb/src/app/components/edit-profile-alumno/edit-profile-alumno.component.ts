import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/interfaz';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-profile-alumno',
  templateUrl: './edit-profile-alumno.component.html',
  styleUrls: ['./edit-profile-alumno.component.css']
})
export class EditProfileAlumnoComponent implements OnInit {
// public profes:Profe[] = [] ;
router: Router;
route: ActivatedRoute;
alums!: FormGroup;
alumno:Alumno = {
  id_alumno: 0,
  nick: '',
  fname: "",
  lname: "",
  mail: "",
  fecha: "",
  pssw: "",
  psswConf: "",
  avatar: ""

}
serverAlumnoService: any;
alumnos: any;

constructor(router: Router, route: ActivatedRoute, serverAlumnoService: ServerAlumnoService, private  formBuilder: FormBuilder) {

  this.route = route;
  this.router = router;
  this.serverAlumnoService = serverAlumnoService;

}

ngOnInit(): void {
  this.alumno = {
    id_alumno: Number(this.route.snapshot.paramMap.get('id_profesor')),
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
  let alumno: Alumno = {
    id_alumno: this.alumno.id_alumno,
    nick: this.alumno.nick,
    fname: this.alumno.fname,
    lname: this.alumno.lname,
    fecha: this.alumno.fecha,
    mail: this.alumno.mail,
    pssw: '',
    psswConf: '',
    avatar: ''
  }
  this.serverAlumnoService.modificarAlumno(alumno).subscribe(
    (datos: string) => {
      if (datos == 'OK') {
        console.log('ok');
      }else{
        console.log('nooo');
      }
    }
  );
  this.router.navigate(['palumno', this.alumno]);
}
// get data() { return this.profe.controls; }
editar(){
  this.router.navigate(['editar-alumno']);
}

volver(){
  this.router.navigate(['palumno',this.alumno]);
  }

}