import { Component, OnInit } from '@angular/core';
import { UploadsService } from './../../../core/services/uploads/uploads.service';
import { Upload } from './../../../core/services/uploads/upload';
import * as _ from "lodash";

@Component({
  selector: 'uploads-form',
  templateUrl: './uploads-form.component.html',
  styleUrls: ['./uploads-form.component.scss']
})
export class UploadsFormComponent {


  selectedFiles: FileList;
  currentUpload: Upload;
  logoUrl: any[]

  constructor(private upSvc: UploadsService) { 
  }


  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload)
    this.upSvc.uploadFilePath().then(path=>{
      this.logoUrl = path
    })

  }

  uploadMulti() {
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.upSvc.pushUpload(this.currentUpload)
      this.upSvc.uploadFilePath().then(path=>{
        this.logoUrl.push(path)
      })
    }
    )
  }



}
