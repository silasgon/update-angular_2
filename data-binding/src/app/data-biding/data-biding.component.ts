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

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  constructor() {}

  ngOnInit(): void {}
}
