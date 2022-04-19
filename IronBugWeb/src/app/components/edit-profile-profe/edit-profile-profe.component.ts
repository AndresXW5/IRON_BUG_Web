import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { Profe } from 'src/app/interfaces/interfaz';
import { ServerProfesorService } from 'src/app/server/server-profesor.service';
import Swal from 'sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-profe',
  templateUrl: './edit-profile-profe.component.html',
  styleUrls: ['./edit-profile-profe.component.css']
})
export class EditProfileProfeComponent implements OnInit {
// public profes:Profe[] = [] ;
router: Router;
route: ActivatedRoute;

serverProfesorService: any;
profesores: any;

constructor(router: Router, route: ActivatedRoute, serverProfesorService: ServerProfesorService, private  formBuilder: FormBuilder) {

  this.route = route;
  this.router = router;
  this.serverProfesorService = serverProfesorService;

}
profes!: FormGroup;
profe:Profe = {
  id_profesor: 0,
  nick: '',
  fname: "",
  lname: "",
  mail: "",
  centro: "",
  pssw: "",
  psswConf: "",
  avatar: ""

}

ngOnInit(): void {
  this.profe = {
    id_profesor: Number(this.route.snapshot.paramMap.get('id_profesor')),
    fname: String(this.route.snapshot.paramMap.get('fname')),
    lname: String(this.route.snapshot.paramMap.get('lname')),
    nick: String(this.route.snapshot.paramMap.get('nick')),
    mail: String(this.route.snapshot.paramMap.get('mail')),
    centro: String(this.route.snapshot.paramMap.get('centro')),
    pssw: String(this.route.snapshot.paramMap.get('pssw')),
    psswConf: String(this.route.snapshot.paramMap.get('psswConf')),
    avatar: String(this.route.snapshot.paramMap.get('avatar'))

  };

  this.profes = this.formBuilder.group({
 fname: [''],
 lname: [''],
 nick: [''],
 mail: [''],
 centro: ['']
});
// this.myGroup = new FormGroup({
//   firstName: [)
// });

this.profes = new FormGroup({
  fname: new FormControl('',[Validators.required]),
  lname: new FormControl('',[Validators.required]),
  nick: new FormControl('',[Validators.required]),
  mail: new FormControl('',[Validators.required]),
  centro: new FormControl('',[Validators.required]),
});
}

onSubmit() {
  this.modificarProfesor();
}

modificarProfesor(){
  let profe: Profe = {
    id_profesor: this.profe.id_profesor,
    nick: this.profe.nick,
    fname: this.profe.fname,
    lname: this.profe.lname,
    centro: this.profe.centro,
    mail: this.profe.mail,
    pssw: '',
    psswConf: '',
    avatar: ''
  }
  this.serverProfesorService.modificarProfesor(profe).subscribe(
    (datos: string) => {
      if (datos == 'OK') {
        console.log('ok');
      }else{
        console.log('nooo');
      }
    }
  );
  this.router.navigate(['pprofe', this.profe]);
}
// get data() { return this.profe.controls; }

editar(){
  this.router.navigate(['editar-profe']);


}

  volver(){

    this.router.navigate(['pprofe',this.profe]);
  }
  addRank(){
    
  }

}
