import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service'
@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css']
})
export class FileTableComponent implements OnInit {
  columns: Array<string> = ['Name', 'Size (byte)', 'Action'];
  listedFiles;
  constructor(private fileService: FileService) { }

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

}
