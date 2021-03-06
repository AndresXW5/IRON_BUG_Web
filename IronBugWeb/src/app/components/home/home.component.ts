import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: Router;
  route: ActivatedRoute;
  constructor(router: Router, route: ActivatedRoute, public translate: TranslateService) {

    this.translate.addLangs(['es','en']);
    this.translate.setDefaultLang('es');

    this.route = route;
    this.router = router;
  }

  param = {value: 'world'};

  ngOnInit(): void {
  }
  register(){
    this.router.navigate(['login']);
  }

  productos(){
    this.router.navigate(['productos']);
  }

  fortest(){
    this.router.navigate(['testEliminar']);
  }

  es(){
    this.router.navigate(['']);
  }

  en(){
    this.router.navigate(['home-en']);
  }


}
