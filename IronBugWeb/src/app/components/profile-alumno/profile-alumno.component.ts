import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerAlumnoService } from 'src/app/server/server-alumno.service';
import { ServerRankingService } from './../../server/server-ranking.service';
import { Alumno, Ranking } from 'src/app/interfaces/interfaz';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-alumno',
  templateUrl: './profile-alumno.component.html'
})
export class ProfileAlumnoComponent implements OnInit {

  router: Router;
  route: ActivatedRoute;

  constructor(router: Router, route: ActivatedRoute, private service: ServerAlumnoService, private serverRankingService: ServerRankingService) {

    this.route = route;
    this.router = router;
  }

  alumno: Alumno = {
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
  modificarAlumno: any = {
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

  // rankings = []
  ranking: Ranking = {
    id_r: 0,
    name_r: "",
    cont_r: 0
  }



  ngOnInit(): void {
    this.alumno = {
           id_alumno: Number(this.route.snapshot.paramMap.get('id_alumno')),
            fname: String(this.route.snapshot.paramMap.get('fname')),
            lname: String(this.route.snapshot.paramMap.get('lname')),
            nick: String(this.route.snapshot.paramMap.get('nick')),
            mail: String(this.route.snapshot.paramMap.get('mail')),
            fecha: String(this.route.snapshot.paramMap.get('fecha')),
            pssw: String(this.route.snapshot.paramMap.get('pssw')),
            psswConf: String(this.route.snapshot.paramMap.get('psswConf')),
            avatar: String(this.route.snapshot.paramMap.get('avatar'))
          };

    // this.ranking = {
    //         id_r: Number(this.route.snapshot.paramMap.get('id_r')),
    //         name_r: String(this.route.snapshot.paramMap.get('name_r')),
    //         cont_r: Number(this.route.snapshot.paramMap.get('cont_r'))
    //       };

          // this.listar_ranking();
    this.serverRankingService.listarRanking(this.ranking).subscribe(
            (datos: any) => {
              this.ranking = datos;
              console.log(this.ranking);
            }
          );

    }

      volver(){
        localStorage.clear();
        this.router.navigate(['']);
      }

      listar_ranking(){
        this.router.navigate(['ranking']);
      }

      editar(){
        this.router.navigate(['editar-alumno', this.alumno]);

      }
      addRank(){

      }

      async editarImagen() {

        const { value: file } = await Swal.fire({
          title: 'Select image',
          input: 'file',
          inputAttributes: {
            'accept': 'image/*',
            'aria-label': 'Upload your profile picture'
          }
        })

        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
              const imageUrl = reader.result;
              this.modificarAlumno.id_alumno = this.alumno.id_alumno;
              let old = this.modificarAlumno.avatar;
              this.modificarAlumno = this.alumno;
              this.modificarAlumno.avatar = imageUrl;

              this.alumno = this.modificarAlumno;
              console.log(this.alumno);
              this.service.editarImagen(this.alumno).subscribe(
                datos => {
                  if(datos == 'OK'){
                    localStorage.setItem('usuario', JSON.stringify(this.alumno));
                    Swal.fire(
                      'Correcto',
                    )
                  }else{
                    this.alumno = old;
                    Swal.fire(
                      'Error',
                  )
                }
              }
              );
            }
            reader.readAsDataURL(file);
        }
      }
      async unirseRanking() {

        const { value: file } = await Swal.fire({
          title: 'Unirse ranking',
          input: 'text',
          text: 'Introduzca el codigo para unirte'
        })
      }

      async modifyPassword() {

        const { value: password } = await Swal.fire({
          title: 'Enter your password',
          input: 'password',
          inputLabel: 'Password',
          inputPlaceholder: 'Enter your password',

        })

        if (password) {
          Swal.fire(`Entered password: ${password}`)
        }
        if (password) {
            const reader = new FileReader()
            reader.onload = (e) => {
              const imageUrl = reader.result;
              this.modificarAlumno.id_alumno = this.alumno.id_alumno;
              let old = this.modificarAlumno.avatar;
              this.modificarAlumno = this.alumno;
              this.modificarAlumno.avatar = imageUrl;

              this.alumno = this.modificarAlumno;
              console.log(this.alumno);
              this.service.editarImagen(this.alumno).subscribe(
                datos => {
                  if(datos == 'OK'){
                    localStorage.setItem('usuario', JSON.stringify(this.alumno));
                    Swal.fire(
                      'Correcto',
                    )
                  }else{
                    this.alumno = old;
                    Swal.fire(
                      'Error',
                  )
                }
              }
              );
            }
            reader.readAsDataURL(password);
        }
      }

    }
