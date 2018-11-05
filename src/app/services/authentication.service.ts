import { Injectable } from "@angular/core";
import { UserService } from '../services/user.service';
import { User } from "../model/user.model";


@Injectable()
export class AuthenticationService {
    loginStatus: number = -1;
    currentUser: User;
    constructor(private userService: UserService) {}

    
    login(user: User) {
        return this.userService.login(user).map(
            response => {
                localStorage.setItem('currentUser', JSON.stringify({userName : user.username, password : user.pass}))
                return response;
            }, error => {
                return error;
            }
        );
    }

    public logout(): void {
        localStorage.removeItem('currentUser');
    }
}