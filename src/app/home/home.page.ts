import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lugares: any = [
    {nombre: 'nombre1', direccion: 'direcion1', categoria: 'categoria1'},
    {nombre: 'nombre2', direccion: 'direcion2', categoria: 'categoria2'},
    {nombre: 'nombre3', direccion: 'direcion3', categoria: 'categoria3'}
  ];

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
