import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";


@Injectable()
export class EncryptionService {

    constructor(private http: Http, private httpClient: HttpClient) {}

    
    public toBase64(user: User) {
        return btoa(user.username + ':' + user.pass);
    }   
}