import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map'
import { AppSettings } from "../constants/app-settings"


@Injectable()
export class FileService {
    private path: string = AppSettings.API.HOST + ':' + AppSettings.API.PORT;
    constructor(private httpClient: HttpClient) {}

    public uploadFile(file: File) {
        let formData = new FormData();
        formData.append('file', file);
        return this.httpClient.post(this.path + AppSettings.API.ENDPOINTS.UPLOAD, formData);
    }
    
    public getFiles() {
        return this.httpClient.get(this.path + AppSettings.API.ENDPOINTS.GETFILES);
    }

    public getFile(file: string) {
        return this.httpClient.get(this.path + AppSettings.API.ENDPOINTS.DOWNLOAD + file, {responseType: 'blob'})
                                    .map(res => {
                                        return {
                                            filename: file,
                                            data: res                                       
                                        };
                                    })
    }
   
}