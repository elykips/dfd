import { Component, OnInit } from '@angular/core';
import { TourOperatorsService } from '../../../../core/services/tour-operators/tour-operators.service';
import { Router } from '@angular/router';
import * as alertFunctions from '../../../../shared/data/sweet-alerts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//form builder
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { UploadsService } from '../../../../core/services/uploads/uploads.service';
import { Upload } from '../../../../core/services/uploads/upload';
import * as _ from "lodash";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  errorMessage: string;
  successMessage: string;

  companyForm: FormGroup;
  selectedFiles: FileList;
  currentUpload: Upload;
  logoUrl

  constructor(
    private tourOperatorsService:TourOperatorsService,
    private router: Router,
    private upSvc: UploadsService,
    private formBuilder: FormBuilder) { 

    }

    ngOnInit() {
      this.companyForm = this.formBuilder.group({
        companyName: new FormControl('Company name', Validators.required),
        description: new FormControl('Short description about what your company does', Validators.required),
        category: new FormControl('Category', Validators.required),
        regNumber: new FormControl('Registration number', Validators.required),
        membershipNumber: new FormControl('Membership number', Validators.required),
        associationCategory: new FormControl('Association number', Validators.required),
        phone: new FormControl('+1 234 567891', Validators.required),
        email: new FormControl('my-email@domain.com', Validators.required),
        website: new FormControl('www.my-website.com', Validators.required),
        country: new FormControl('Country', Validators.required),
        city: new FormControl('City', Validators.required),
        streetAddress: new FormControl('20, My street name', Validators.required)
      });
  
    }
  

    // get methods for form controls
    get companyName(){
      return this.companyForm.get('companyName');
    }

    get description(){
      return this.companyForm.get('description');
    }

    get category(){
      return this.companyForm.get('category');
    }
    get regNumber(){
      return this.companyForm.get('regNumber');
    }
    get membershipNumber(){
      return this.companyForm.get('membershipNumber');
    }
    get associationCategory(){
      return this.companyForm.get('associationCategory');
    }
    get phone(){
      return this.companyForm.get('phone');
    }
    get email(){
      return this.companyForm.get('email');
    }
    get website(){
      return this.companyForm.get('website');
    }
    get country(){
      return this.companyForm.get('country');
    }
    get city(){
      return this.companyForm.get('city');
    }
    get streetAddress(){
      return this.companyForm.get('streetAddress');
    }

    createCompanyProfile(){
      this.tourOperatorsService.createBusinessProfile({
        userId:localStorage.getItem("currentUserId"),
        name: this.companyName.value,
        logoUrl: this.logoUrl,
        description: this.description.value,
        location:{
          country: this.country.value,
          city: this.city.value,
          address: this.streetAddress.value
        },
        email: this.email.value,
        phone: this.phone.value,
        association: {
          membershipNumber: this.membershipNumber.value,
          membershipCategory:this.associationCategory.value
        },
        registrationNumber: this.regNumber.value,
        isVerified:false,
        website: this.website.value,
        date:new Date() 

      })
      .then(res => {
        this.errorMessage = "";
        this.successMessage = "Succesfully Created";
        this.profileCreatedSuccesfully()
        this.router.navigate(['dashboard/my-profile'])
      }, err => {
        this.errorMessage = err.message;
        this.successMessage = "";
      })
    }
  //   createProfile(profile){
  //   this.tourOperatorsService.createBusinessProfile(
  //     {
  //       userId:localStorage.getItem("currentUserId"),
  //       name:profile.name,
  //       logoUrl: profile.logoUrl,
  //       description: profile.description,
  //       category: profile.category,
  //       location:profile.location,
  //       email: profile.email,
  //       phone:profile.phone,
  //       association: {
  //         membershipNumber:profile.membershipNumber,
  //         membershipCategory: profile.associationCategory
  //       },
  //       registrationNumber: profile.regNumber,
  //       isVerified:false,
  //       website:profile.website,
  //       date:new Date() 
  //    })
  //   .then(res => {
  //     this.errorMessage = "";
  //     this.successMessage = "Succesfully Created";
  //     this.profileCreatedSuccesfully()
  //     this.router.navigate(['dashboard/new-tour'])
  //   }, err => {
  //     this.errorMessage = err.message;
  //     this.successMessage = "";
  //     // this.bankForm.reset();
  //     // this.mobileMoneyForm.reset();
  //   })

  // }

  profileCreatedSuccesfully(){
    alertFunctions.businessProfileSuccess()
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
