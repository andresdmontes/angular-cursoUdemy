import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
   styleUrls: ['../../app.component.css'],
})
export class HeroeComponent {
  nombre: string = 'IronMan';
  edad: number = 45;

  get nombreCaps():string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre}-${this.edad}`;
  }

  cambiarNombre():void{
    this.nombre='Spiderman';
  }
  cambiarEdad():void{
    this.edad=30;
  }
}
