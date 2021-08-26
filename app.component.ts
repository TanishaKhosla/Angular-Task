import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [`.even{color:blue;}
  .odd{
    color:red;
  }`]
})

export class AppComponent  {
  list=[
    {name:'First term'},
    {name:'Second term'},
    {name:'Third term'},
    {name:'Fourth term'}
  ];
}
