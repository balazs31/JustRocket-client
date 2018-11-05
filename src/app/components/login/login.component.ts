import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service'
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
              private router: Router,
              private authenticationService: AuthenticationService) { 
  }

  ngOnInit() {
    this.authenticationService.logout();
    console.log('Logged out')
  }

  login(): void {
    this.currentUser = new User(this.user.username, this.user.pass);
    this.authenticationService.login(this.currentUser).subscribe(
      response => {
        console.log('Successfull login', response);
        this.router.navigate(['/files']);
      }, error => {
        console.log('Error login', error);
        this.loginStatus = error.status;

      }
    );
    // this.userService.login(this.user).subscribe(
    //     response => {
    //       console.log('Successfull login');
    //       localStorage.setItem('currentUser', JSON.stringify({userName : this.currentUser.username, password : this.currentUser.pass}))
    //       this.router.navigate(['/files']);

    //     }, error => {
    //       console.log('Error logging in', error);
    //       this.loginStatus = error.status;
        
    //     }
    // );
  }
}
