import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import * as alertFunctions from '../../../shared/data/sweet-alerts';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  @ViewChild('f') SignUpForm: NgForm;
  route: any;
  errorMessage: string;
  successMessage: string;
  
  constructor(
    private authService: AuthService,
    private router: Router) { }

  signUp(person){
    this.authService.signUp(person)
    .then(res => {
      this.errorMessage = "";
      this.successMessage = "Succesful Signup";
      this.signinSuccess()
      this.router.navigate(['guests/create-profile'])
    }, err => {
      this.errorMessage = err.message;
      this.successMessage = "";
      this.SignUpForm.reset();
    })
  }
  signinSuccess(){
    alertFunctions.signupSuccess()
  }

}
