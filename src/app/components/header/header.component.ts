import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {}

  toggleTheme(event){
    if (event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
      
    }else{
      document.body.setAttribute('color-theme', 'light');
    }
  }

}
