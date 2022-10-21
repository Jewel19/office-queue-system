import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {


  constructor(private router: Router) { 
  
  }

  ofdash(){
    this.router.navigate(['ofcdash'])

  }

  forgot(){
    this.router.navigate(['forgotpass'])

  }

  sgnup(){
    this.router.navigate(['signup'])

  }

  godash(){
    this.router.navigate(['pubdash'])

  }

  ngOnInit() {

    
  }
  
}





