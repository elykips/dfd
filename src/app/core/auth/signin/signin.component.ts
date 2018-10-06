import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { PhoneNumber } from '../phone/phone';
import * as firebase from 'firebase';
import * as alertFunctions from '../../../shared/data/sweet-alerts';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'] 
})
export class SigninComponent {

  @ViewChild('f') SigInForm: NgForm;
  resetPass=false
  phone=false
  route: any;
  errorMessage: string;
  successMessage: string;

  tourOperator: any[];

  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router) {

      // hide forgot pass
      this.resetPass=false

      //hide phone login
      this.phone=false


         //update user id in local storage if user is online
         this.authService.checkIfUserIsOnline().subscribe(user=>{
          if(!user) return
          else{
            localStorage.setItem("currentUserId", user.uid)
          }
        })
  
        // retreive current user details
        this.authService.currentTourOpertor().subscribe(res=>{
          if(!res) return
          else {
            this.tourOperator = res
            // this.router.navigate(['dashboard/overview'])
           }
        })  

    }

  signIn(credentials){
    this.authService.signIn(credentials)
    .then(res => {
      this.errorMessage = "";
      this.successMessage = "Succesful Login";
      this.signinSuccess()
      this.router.navigate(['dashboard/overview'])
    }, err => {
      this.signinError()
      this.errorMessage = err.message;
      this.successMessage = "";
      this.SigInForm.reset();
    })
  }

  forgotPassword(email){
    this.authService.resetPassword(email)
    .then(res => {
      this.errorMessage = "";
      this.successMessage = "Check your email: "+email;
    }, err => {
      this.errorMessage = err.message;
      this.successMessage = "";
      this.SigInForm.reset();
    })
  }

  requestNewPass(){
    this.resetPass=true
  }

  // Success Type Alert
  signinSuccess(){
    alertFunctions.signinSuccessfuly()
  }

   // sign-in Err
   signinError(){
    alertFunctions.signinError()
  }


}
