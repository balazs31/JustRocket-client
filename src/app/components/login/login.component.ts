import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginStatus: number = -1;
  user: any = {};
  currentUser: User;
  constructor(private userService: UserService,
              private router: Router) { 
  }

  ngOnInit() {

  }

  login(): void {
    this.currentUser = new User(this.user.username, this.user.pass);
    this.userService.login(this.user).subscribe(
        response => {
          console.log('Successfull login');
          localStorage.setItem('currentUser', JSON.stringify({userName : this.currentUser.username, password : this.currentUser.pass}))
          this.router.navigate(['/files']);

        }, error => {
          console.log('Error logging in', error);
          this.loginStatus = error.status;
        
        }
    );
  }
}
