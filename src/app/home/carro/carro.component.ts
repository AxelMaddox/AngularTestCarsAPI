import { Component, OnInit } from '@angular/core';
import { ApieService } from 'src/app/service/api.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent{
  //data: any[] = [];
  datos: any;
  tarjetaActual: number = 0;

  constructor(private apiService: ApieService) {
    //this.data = {} //opcional
  }

  ngOnInit(): void {

    this.llenarData()
  }

  llenarData(){
this.apiService.getData().subscribe(data => {
  //this.data = data;
  if (Array.isArray(data) && data.length > 0){
    //this.data = data.shift();
    this.datos = data
    this.mostrarTarjeta(0);
    console.log(this.datos);
  }

});
  }

  mostrarTarjeta(indice: number){
    if (indice >= 0 && indice < this.datos.length) {
      this.tarjetaActual = indice;
    }
  }








}
