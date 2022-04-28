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
  constructor(router: Router, route: ActivatedRoute) {

    this.route = route;
    this.router = router;
  }

  ngOnInit(): void {
  }
  register(){
    this.router.navigate(['login']);
  }

  fortest(){
    this.router.navigate(['testEliminar']);
  }

}
