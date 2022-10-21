import { Queuestem } from './../services/queuestem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pubdash',
  templateUrl: './pubdash.page.html',
  styleUrls: ['./pubdash.page.scss'],
})
export class PubdashPage implements OnInit {
  public office: any= [
    
    
    {id: 1, name: 'dac', wndw: 1 , amount:34 , time: 53},
    {id: 2, name: 'deans',wndw: 3 , amount:54 , time: 120 },
    {id: 3, name: 'finance', wndw: 2 , amount:22 , time: 434},
    {id: 4, name: 'registrar', wndw: 3 , amount:44 , time: 434}

]
  constructor() { }

  ngOnInit() {
  }

}
