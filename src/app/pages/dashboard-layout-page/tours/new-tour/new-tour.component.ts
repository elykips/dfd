import { Component, OnInit } from '@angular/core';
import { TourOperatorsService } from '../../../../core/services/tour-operators/tour-operators.service';
import { Router } from '@angular/router';
import * as alertFunctions from './../../../../shared/data/sweet-alerts';

import { Upload } from '../../../../core/services/uploads/upload';
import { UploadsService } from '../../../../core/services/uploads/uploads.service';
import * as _ from "lodash";

//form builder
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.scss']
})
export class NewTourComponent implements OnInit {


  errorMessage: string;
  successMessage: string;

  selectedFiles: FileList;
  currentUpload: Upload;
  logoUrl
  

  public tourForm: FormGroup;
  
  constructor(
    private tourOperatorsService:TourOperatorsService,
    private upSvc: UploadsService,
    private router: Router,
    private formBuilder: FormBuilder) {

     }

  ngOnInit() {
    this.tourForm = this.formBuilder.group({
      title: new FormControl('Type tour title', Validators.required),
      category: new FormControl('Category', Validators.required),
      description: new FormControl('Short description about the tour', Validators.required),
      price: new FormControl('(Figures only)', Validators.required),
      includes: new FormControl('What is included in the package?', Validators.required),
      excluded: new FormControl('What is not included?', Validators.required),
      whatToCarry: new FormControl('What do visitors need to carry?', Validators.required),
      additionalInfo: new FormControl('Any additional information?', Validators.required),
      itinerary: this.formBuilder.array([ this.createItineraryFields()])
    });

   
  }

  // add more itinerary fields
  createItineraryFields(): FormGroup {
    return this.formBuilder.group({
      activityDate: new FormControl('Day 1', Validators.required),
      activity: new FormControl('What is the activity for this day?', Validators.required),
      activityDescription: new FormControl('Type a short description about the activity', Validators.required)
    });
  }

  // get methods for form controls
  get title(){
    return this.tourForm.get('title');
  }

  get category(){
    return this.tourForm.get('category');
  }

  get description(){
    return this.tourForm.get('description');
  }

  get price(){
    return this.tourForm.get('price');
  }
  get includes(){
    return this.tourForm.get('includes');
  }

  get excluded(){
    return this.tourForm.get('excluded');
  }

  get whatToCarry(){
    return this.tourForm.get('whatToCarry');
  }

  get additionalInfo(){
    return this.tourForm.get('additionalInfo');
  }

  get itinerary(){
    return this.tourForm.get('itinerary') as FormArray;
  };

  //add more itinerary object
  addMoreItineraryFields(): void {
    this.itinerary.push(this.createItineraryFields());
    
  }

  get m(){
    return this.itinerary.controls.length-1;
  }

  get item1(){
    return this.itinerary.controls.findIndex
  }

  // remove itinerary object
  removeItem(id){
    this.itinerary.removeAt(id)
  }

  get tourObject(){
    return {
      userId:localStorage.getItem("currentUserId"),
      name: this.tourForm.value.title,
      category: this.tourForm.value.category,
      description: this.tourForm.value.description,
      logoUrl: this.logoUrl,
      price: this.tourForm.value.price,
      extras: this.tourForm.value.includes,
      excluded: this.tourForm.value.excluded,
      whatToCarry: this.tourForm.value.whatToCarry,
      additionalInfo: this.tourForm.value.additionalInfo,
      isPublished:false,
      itinerary: this.tourForm.value.itinerary,
      date:new Date(),

    }
  }

  createTour(){
    this.tourOperatorsService.createTour(this.tourObject)
    .then(res => {
      this.errorMessage = "";
      this.successMessage = "Succesfully Added Tour";
      this.createTourSuccess()
      this.router.navigate(['dashboard/tours'])
    }, err => {
      this.errorMessage = err.message;
      this.successMessage = "";
    })

  }


  // Success Type Alert
  createTourSuccess(){
    alertFunctions.tourCreatedSuccessfully()
  }

  //file uploads functions
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

  deleteThisPhoto(){
    this.upSvc.deleteUpload(this.currentUpload)
  }



}
