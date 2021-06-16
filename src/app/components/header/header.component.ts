import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 @Input() nocturno:boolean=false;
  constructor() { }

  ngOnInit() {}

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
