import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']

})
export class ListadoComponent {
  heroes: string[] = ["Spiderman","Superman","Thor"];
  heroeBorrado:string="";
  borrarHeroe(){
    console.log("Borrando...");
    this.heroeBorrado=this.heroes[this.heroes.length-1] || "";
    this.heroes.splice(this.heroes.length-1,1)
  }
}
