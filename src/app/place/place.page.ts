import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LugaresService } from '../services/lugares.service';
@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {

  lugar: any = {};
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private lugarService: LugaresService
  ) {
   }

  ngOnInit() {
    this.form = this.buildForm();
    // this.nombreLugar = this.route.snapshot.paramMap.get('id');
  }

  private buildForm() {
    return this.formBuilder.group({
      nombre: ['', [Validators .required]],
      direccion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });
  }

  savePlace($event: Event) {
    $event.preventDefault();
    console.log(this.form.value);
    this.lugar = this.form.value;
    this.lugar.id = Date.now();
    this.lugarService.createLugar(this.lugar);
  }

}
