import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FileService } from '../../services/file.service'
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { Constants } from '../../constants/constants'

declare var swal: any;

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css']
})
export class FileTableComponent implements OnInit {
  columns: Array<string> = ['Name', 'Size (byte)', 'Action'];
  listedFiles;
  files: UploadFile[] = [];
  droppedFiles: Array<File> = [];
  constructor(private fileService: FileService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.fileService.getFiles().subscribe(
      response => {
        console.log('Users files: ', response);
        this.listedFiles = response;
      }, error => {
        console.log('Could not retrieve files', error);
      }
    )
  }

  public downloadFile(file: string): void {
    this.fileService.getFile(file).subscribe(
      res => {
        console.log('start download:',res);
        var url = window.URL.createObjectURL(res.data);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = res.filename;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove(); 
      }, error => {
        console.log('Error downloading file ', error);
      }
    )
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    console.log('Drop event')
    for (const droppedFile of event.files) {
 
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          
          console.log(droppedFile.relativePath, file);
          this.droppedFiles.push(file);
          this.cdRef.detectChanges();
          console.log('Dropped files: ', this.droppedFiles)
 
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }


  public uploadFile(fileName: string): void {
    for (let file of this.droppedFiles) {
      if (file.name == fileName) {
        this.fileService.uploadFile(file).subscribe(
          res => {
            console.log('File succesfully uploaded ', res);
            this.droppedFiles.splice(this.droppedFiles.indexOf(file), 1);
            this.listedFiles.push(file);
            this.cdRef.detectChanges()
            console.log(this.droppedFiles);
            swal(
              Constants.ALERTS.TITLE.UPLOADED,
              Constants.ALERTS.MESSAGE.FILE_UPLOADED,
              Constants.ALERTS.TYPE.SUCCESS
            );
          }, error => {
            swal(
              Constants.ALERTS.TITLE.ERROR,
              Constants.ALERTS.MESSAGE.ERROR_MESSAGE,
              Constants.ALERTS.TYPE.ERROR
            );
            console.log('Upload error: ', error)
          }
        )
      }
    }
  }

}
