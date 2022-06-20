import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>

        <h5>La base es <strong> {{ base }}</strong></h5>

        <button (click)="acumulate(base)"> + {{ base }} </button>

        <span> {{ number }} </span>

        <button (click)=" acumulate(-base)"> - {{ base }} </button>
    
    `
})
export class ContadorComponent {
    title: string = 'Contador App';
    number: number = 10;
    base: number = 5;
  /* 
    sum() {
      this.number += 1;
    }
    substract() {
      this.number -= 1;
    } */
  
    acumulate(value: number) {
      this.number += value;
    }
}