import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ranking } from 'src/app/interfaces/interfaz';
import { ServerRankingService } from 'src/app/server/server-ranking.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

    router: Router;
    route: ActivatedRoute;
   
  
    ServerRankingService: any;
    profesorInicio: any;
    formBuilder: any;
    rankings: any;
    constructor(router: Router, route: ActivatedRoute, private service: ServerRankingService) {
  
      this.route = route;
      this.router = router;
      this.service = service;
  
    }
   
    addRank: any = {
      name_r: "",
      codigo: 0
    }
  
    ranking: Ranking [] | any = {
      name_r: "",
      id_r: 0,
      cont_r: 0,
      codigo: 0
    }
    ngOnInit(): void {
        this.ranking =  this.formBuilder.group( {
          name_r:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]]
         
      });
    
    }
  
    onSubmit() {
      this.registrarRanking();
  
    }
  
    registrarRanking(){
      this.service.anadirRanking(this.ranking.idr_r,this.ranking.name_r,this.ranking.codigo,this.ranking.cont_r).subscribe(
           datos => this.ranking = datos
      );
   this.router.navigate(['login']);
    }
    get data() { return this.ranking.controls; }

    async anadirRanking() {

      const { value: name_r } = await Swal.fire({
        
          title: 'Asigne un nombre al ranking',
          input: 'text',
          text: ''
  
        })
        console.log(name_r);
      }
}
