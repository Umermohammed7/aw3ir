import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { RouterModule, Routes } from '@angular/router';
import { MeteoDetailComponent } from './meteo-detail/meteo-detail.component';

const appRoutes: Routes = [
 
  {
    path: '', // la page principale utilisera le component suivant
    component: MeteoComponent
  }, { 
    path: 'meteo/:name',  // la page  affichant la météo prendra comme paramètre 'name'
    component: MeteoDetailComponent }, // Ce component fera l'appel AJAX et afficher les données reçues par openWeatherMap
  {
    path: '', // un chemin vide renverra vers '/'
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MeteoDetailComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


