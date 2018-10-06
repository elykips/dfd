import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//import components from auth
import { SigninComponent } from './auth/signin/signin.component';

//import routing core routing module
import { CoreRoutingModule } from './core-routing.module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { PhoneAuthComponent } from './auth/phone/phone-auth.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    PhoneAuthComponent
  ]
})
export class CoreModule { }
