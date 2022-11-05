import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css'],
})
export class DataBidingComponent implements OnInit {
  url: string = 'http://silas.update.com';
  cursoAngular: boolean = true;

  urlImage: string = 'http://lorempixel.com.br/500/400/?1';
  urlImage2: string = 'http://lorempixel.com.br/500/400/?2';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {}

  ngOnInit(): void {}
}
