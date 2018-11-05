import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EncryptionService } from '../services/encryption.service'
import { User } from '../model/user.model';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private encryptionService: EncryptionService){};
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.url == 'http://localhost:8080/login') {
            return next.handle(request);
        }

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let currentUserName = currentUser.userName;
        let currentPass = currentUser.password;
        let base64 = this.encryptionService.toBase64(new User(currentUserName, currentPass));
        console.log('Intercepting request')
        if (base64) {
            request = request.clone({
                setHeaders: { 
                    Authorization: 'Basic ' + base64
                }
            });
        }

        return next.handle(request);
    }
}