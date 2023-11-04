import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CarroComponent } from './carro/carro.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'carros', component: CarroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
