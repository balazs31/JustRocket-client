import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map'


@Injectable()
export class FileService {

    constructor(private httpClient: HttpClient) {}

    public uploadFile(file: File) {
        let formData = new FormData();
        formData.append('file', file);
        return this.httpClient.post('http://localhost:8080/uploadFile', formData);
    }
    
    public getFiles() {
        return this.httpClient.get('http://localhost:8080/getFiles');
    }

    public getFile(file: string) {
        return this.httpClient.get('http://localhost:8080/downloadFile/' + file, {responseType: 'blob'})
                                    .map(res => {
                                        return {
                                            filename: file,
                                            data: res                                       
                                        };
                                    })
    }
   
}