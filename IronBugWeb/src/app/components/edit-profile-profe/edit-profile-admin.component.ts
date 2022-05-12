import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { Admin } from 'src/app/interfaces/interfaz';
import { ServerProfesorService } from 'src/app/server/server-profesor.service';
import Swal from 'sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-admin',
  templateUrl: './edit-profile-admin.component.html',
  styleUrls: ['./edit-profile-admin.component.css']
})
export class EditProfileAdminComponent implements OnInit {
router: Router;
route: ActivatedRoute;

serverProfesorService: any;
profesores: any;

constructor(router: Router, route: ActivatedRoute, serverProfesorService: ServerProfesorService, private  formBuilder: FormBuilder) {

  this.route = route;
  this.router = router;
  this.serverProfesorService = serverProfesorService;

}
admin_!: FormGroup;
admin:Admin = {
  id_admin: 0,
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
  this.admin = {
    id_admin: Number(this.route.snapshot.paramMap.get('id_admin')),
    fname: String(this.route.snapshot.paramMap.get('fname')),
    lname: String(this.route.snapshot.paramMap.get('lname')),
    nick: String(this.route.snapshot.paramMap.get('nick')),
    mail: String(this.route.snapshot.paramMap.get('mail')),
    centro: String(this.route.snapshot.paramMap.get('centro')),
    pssw: String(this.route.snapshot.paramMap.get('pssw')),
    psswConf: String(this.route.snapshot.paramMap.get('psswConf')),
    avatar: String(this.route.snapshot.paramMap.get('avatar'))

  };

  this.admin_ = this.formBuilder.group({
 fname: [''],
 lname: [''],
 nick: [''],
 mail: [''],
 centro: ['']
});
// this.myGroup = new FormGroup({
//   firstName: [)
// });

this.admin_ = new FormGroup({
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
  let admin: Admin = {
    id_admin: this.admin.id_admin,
    nick: this.admin.nick,
    fname: this.admin.fname,
    lname: this.admin.lname,
    centro: this.admin.centro,
    mail: this.admin.mail,
    pssw: '',
    psswConf: '',
    avatar: ''
  }
  this.serverProfesorService.modificarProfesor(admin).subscribe(
    (datos: string) => {
      if (datos == 'OK') {
        console.log('ok');
      }else{
        console.log('nooo');
      }
    }
  );
  this.router.navigate(['pprofe', this.admin]);
}

editar(){
  this.router.navigate(['editar-profe']);


}

  volver(){

    this.router.navigate(['pprofe',this.admin]);
  }
  addRank(){

  }

}
