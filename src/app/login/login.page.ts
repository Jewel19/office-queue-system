import { SignupPage } from './../signup/signup.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {



    }
  

}
function fill(arg0: Promise<boolean>) {
       fill(this.router.navigate(['signup'])); throw new Error('Function not implemented.');
}

