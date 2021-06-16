import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  
  autofill ={
    nac:"Española",
    opcDNI: '',
    opcPas: '',
  }
  opciones:string[];
 
  constructor() { 
    this.opciones=[
      "DNI",
      'pasaporte',
      'TIS'
    ]
  }

  ngOnInit() {
  }

  fillInfo(forma:NgForm){
    if(forma.value.opc === 'DNI'){
      this.autofill.opcDNI= forma.value.opcDNI;
    }else if (forma.value.opc==='Pas'){
      this.autofill.opcPas= forma.value.opcPas;
    }
  }

  verInfo (forma:NgForm){
    console.log(forma);
  }
 
}
