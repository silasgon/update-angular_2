import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms - Second Edition',
    rating: 4.9516,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.amazon.com.br/gp/product/B07P6SZJVQ/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0'
  };

  livros: string[] = ['Java', 'Angular 2', 'NodeJS'];

  filtro?:string;

  addCurso(valor:any){
    this.livros.push(valor)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
