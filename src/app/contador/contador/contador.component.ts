import { Component } from '@angular/core';

@Component({
  selector:'app-contador',
  template:`
  <h1>{{titulo}}</h1>
  <h3>La base es {{base}}</h3>

  <button (click)="acumular(-1)">-{{base}}</button>
  <span> {{numero}} </span>
  <button (click)='acumular(+1)'>+{{base}}</button>
  `
})

export class ContadorComponent {
  titulo: string = 'ContadorApp';
  numero: number = 10;
  base: number=5;
  acumular(valor:number) {
    this.numero += valor*this.base;
  }
}
