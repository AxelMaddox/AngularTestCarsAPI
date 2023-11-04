import { Component, OnInit } from '@angular/core';
import { ApieService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{



  constructor( private router: Router) {}

  navegar(){
    this.router.navigate(['carros']);
      }
}
