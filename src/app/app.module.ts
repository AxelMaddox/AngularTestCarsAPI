import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './home/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarroComponent } from './home/carro/carro.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'carros', component: CarroComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarroComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
