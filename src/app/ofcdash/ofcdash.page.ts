import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofcdash',
  templateUrl: './ofcdash.page.html',
  styleUrls: ['./ofcdash.page.scss'],
})
export class OfcdashPage implements OnInit {
  public queuer: any= [
    
    
    {qnum: 1, querid: 42344, },
    {qnum: 2, querid: 13213, },
    {qnum: 3, querid: 66543, },
    {qnum: 4, querid: 91234, },
    {qnum: 11, querid: 42344, },
    {qnum: 21, querid: 13213, },
    {qnum: 13, querid: 66543, },
    {qnum: 14, querid: 91234, },

]
  constructor() { }

  ngOnInit() {
  }

}
