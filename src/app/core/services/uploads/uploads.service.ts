import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import {  AngularFireDatabase } from 'angularfire2/database';

import { Upload } from './upload';
import * as firebase from 'firebase'



@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  constructor(
    // private af: AngularFireModule,
    // private afs: AngularFirestore,
    private db: AngularFireDatabase) { 

    }

    private basePath:string ='/uploads';
    private uploadTask: firebase.storage.UploadTask;

    pushUpload(upload:Upload){
      let storageRef = firebase.storage().ref()
      this.uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
      this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
        (snapshot)=>{
          
          // upload in progress
          upload.progress = (this.uploadTask.snapshot.bytesTransferred / this.uploadTask.snapshot.totalBytes) * 100,
          (error)=>{
            // upload failed
            console.log(error)
        },
        ()=>{
          upload.url = this.uploadTask.snapshot.downloadURL  
          upload.name = upload.file.name
          // this.saveFileData(upload)
        }

      })



      
    }

  //get filepath 
  uploadFilePath(){
    return this.uploadTask.snapshot.ref.getDownloadURL()
  }

    // Writes the file details to the realtime db
  // private saveFileData(upload: Upload) {
  //   this.db.list(`${this.basePath}/`).push(upload.name);
  // }
  

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
    .then( () => {
      this.deleteFileStorage(upload.name)
      console.log("Deleted file: ",upload.file.name)

    })
    .catch(error => console.log(error))
  }

  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name:string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }


}
