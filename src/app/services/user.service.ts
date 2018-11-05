import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/user.model";
import { EncryptionService } from "../services/encryption.service"
import { AppSettings } from "../constants/app-settings"

@Injectable()
export class UserService {
    private path: string = AppSettings.API.HOST + ':' + AppSettings.API.PORT;
    constructor(private httpClient: HttpClient, private encryptionService: EncryptionService) {}

    public login(user: User) {
        let headers = new HttpHeaders({'Authorization': 'Basic ' + this.encryptionService.toBase64(user)});
        return this.httpClient.post(this.path + AppSettings.API.ENDPOINTS.LOGIN, {}, {headers: headers});
    }
}
