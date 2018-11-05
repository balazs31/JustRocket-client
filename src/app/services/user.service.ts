import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/user.model";
import { EncryptionService } from "../services/encryption.service"

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient, private encryptionService: EncryptionService) {}

    public login(user: User) {
        let headers = new HttpHeaders({'Authorization': 'Basic ' + this.encryptionService.toBase64(user)});
    
        return this.httpClient.post('http://localhost:8080/login', {}, {headers: headers});
    
    }
}
