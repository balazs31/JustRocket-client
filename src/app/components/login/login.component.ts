import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  currentUser: User;
  constructor() { 
  }

  ngOnInit() {

  }

  login(): void {
    console.log('Logging in: ' + this.user.username + " " + this.user.pass)
  }
}
