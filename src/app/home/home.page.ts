import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lugares: any = [];

  constructor(
    private router: Router
  ) {
  }

  navPlace(lugar) {
    const id = '2';
    this.router.navigate([`tabs/place/${id}`]);
  }

  CrearLugar() {
    this.router.navigate([`tabs/place`]);
  }
}
