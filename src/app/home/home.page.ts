import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LugaresService } from '../services/lugares.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lugares: any = [];

  constructor(
    private router: Router,
    private lugarService: LugaresService
  ) {
    this.lugarService.getLugares().snapshotChanges()
    .pipe(
      map(actions => actions.map( item  => item.payload.val()))
    )
    .subscribe((places) => {
      this.lugares = places;
      }
    );
  }

  navPlace(lugar) {
    this.router.navigate([`tabs/place/${lugar.id}`]);
  }

  createPlace() {
    this.router.navigate([`tabs/place`]);
  }
}
