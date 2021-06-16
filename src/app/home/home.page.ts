import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idiomas:any=[];
  constructor() { 
    this.idiomas=[
      {
      nombre: "Euskera",
      },
      {
        nombre: "español",
      }
    ]
  }


}
