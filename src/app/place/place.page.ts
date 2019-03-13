import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LugaresService } from '../services/lugares.service';
@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {

  lugar: any = null;
  form: FormGroup;
  id: any = null;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private lugarService: LugaresService,
    private router: Router
  ) {
    this.form = this.buildForm();
    this.id = this.route.snapshot.paramMap.get('id');
    if ((this.id !== undefined) || (this.id !== null) ) {
      this.lugar = this.lugarService.getLugar(this.id)
      .subscribe((data: any) => {
         this.lugar = data;
         this.form.patchValue(this.lugar);
      });
    } else {
      this.form = this.buildForm();
    }
   }

  ngOnInit() {
  }

  private buildForm() {
    return this.formBuilder.group({
      nombre: ['', [Validators .required]],
      direccion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });
  }

  editPlace(lugar) {
    this.lugar = this.form.value;
    this.lugar.id = this.id;
    this.lugarService.editLugar(this.lugar);
    this.router.navigate([`home`]);
  }

  savePlace() {
    if (this.id === null) {
      this.lugar = this.form.value;
      this.lugar.id = Date.now();
      console.log(this.lugar);
      this.lugarService.createLugar(this.lugar);
      this.router.navigate([`home`]);
    } else {
      this.editPlace(this.lugar);
    }
  }

}
