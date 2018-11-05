import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class FileService {

    constructor(private httpClient: HttpClient) {}

    public getFiles() {
        return this.httpClient.get('http://localhost:8080/getFiles');
    }

   
}