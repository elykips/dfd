import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { TourOperatorsService } from '../../../core/services/tour-operators/tour-operators.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {

  businessProfile:any[]
  tourOperator:any[];

  constructor(
    private authService:AuthService,
    private router: Router,
    private tourOperatorService: TourOperatorsService) {

       //update user id in local storage if user is online
       this.authService.checkIfUserIsOnline().subscribe(user=>{
        if(!user) return
        else{
          localStorage.setItem("currentUserId", user.uid)
          console.log(user.uid)
        }
      })

      // retreive current user details
      this.authService.currentTourOpertor().subscribe(res=>{
        if(res){
          this.tourOperator = res
        }
      })  

      // retreive business profile details
     this.tourOperatorService.currentTourOpertorBusiness().subscribe(res=>{
      if(res){
        this.businessProfile = res
      }
      }) 

    }

}
