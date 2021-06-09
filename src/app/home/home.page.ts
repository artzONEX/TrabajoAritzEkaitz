import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nocturno:boolean=false;
  idiomas:any=[];
  constructor() { 
    this.idiomas=[
      {
      nombre: "Euskera",
      bandera: './../../assets/basque.svg'
      },
      {
        nombre: "español",
        bandera: './../../assets/spanish.svg'
      }
    ]
  }

  toggleTheme(event){
    if (event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
      this.nocturno=true;
    }else{
      document.body.setAttribute('color-theme', 'light');
      this.nocturno=false;
    }
  }

}
