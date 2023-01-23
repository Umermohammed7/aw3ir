import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MeteoService } from '../services/meteo.service'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-meteo-detail',
  templateUrl: './meteo-detail.component.html',
  styleUrls: ['./meteo-detail.component.css']
})
export class MeteoDetailComponent implements OnInit {

  meteo: any;
  tab: any = [];

  constructor(
    private route: ActivatedRoute,
    private meteoService: MeteoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMeteo();
    this.get_meteo_futur();
  }

  getMeteo(): void {
    const name = this.route.snapshot.paramMap.get('name');
    // pour lire la paramètre 'name' dans l'URL de la page  comme définit dans le router avec
    // path: 'meteo/:name'

    console.log('getmeteo', name);
    if (name) {
      this.meteoService.getMeteo(name)
        .then(meteo => this.meteo = meteo)
        .catch(fail => this.meteo = fail);
    }
  }

  get_meteo_futur(): void {
    const name = this.route.snapshot.paramMap.get('name');
    // pour lire la paramètre 'name' dans l'URL de la page  comme définit dans le router avec
    // path: 'meteo/:name'

    console.log('get_meteo_futur', name);
    if (name) {
      this.meteoService.get_meteo_futur(name)
        .then(meteo => { this.tab = meteo.list; console.log(this.tab) })
        .catch(fail => this.tab = null);
    }
  }





}