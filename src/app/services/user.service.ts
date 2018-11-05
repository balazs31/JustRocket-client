import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/user.model";


@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) {}

    public login(user: User) {
        let headers = new HttpHeaders({'Authorization': 'Basic ' + btoa(user.username + ':' + user.pass)});
    
        return this.httpClient.post('http://localhost:8080/login', {}, {headers: headers});
    
    }
}
