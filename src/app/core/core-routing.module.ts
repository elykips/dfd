import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//import components within the core
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PhoneAuthComponent } from './auth/phone/phone-auth.component';


const routes: Routes = [
    {
      path: '',
      children: [
        {
            path: 'sign-in',
            component: SigninComponent,
            data: {
                title: 'Sign In'
            }
        },
        {
            path: 'sign-up',
            component: SignupComponent,
            data: {
                title: 'Sign Up'
            }
        },
        {
          path: 'phone-auth',
          component: PhoneAuthComponent,
          data: {
              title: 'Phone Auth'
          }
      },
        
      ]
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
