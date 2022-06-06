import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home-en.component.css']
})
export class HomeEnComponent implements OnInit {

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
  register_en(){
    this.router.navigate(['login-en']);
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
    this.router.navigate(['productos']);
  }

}
