import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {

  nombreLugar = '';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.nombreLugar = this.route.snapshot.paramMap.get('id');
  }

}
