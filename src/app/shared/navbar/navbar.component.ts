import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import * as alertFunctions from './../../shared/data/sweet-alerts';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{

    tourOperator: any[];

    constructor(
        // private authService: AuthService,
        // private router: Router
        ){

      //update user id in local storage if user is online
      // this.authService.checkIfUserIsOnline().subscribe(user=>{
      //   if(!user) return
      //   else{
      //     localStorage.setItem("currentUserId", user.uid)

      //   }
      // })

      // retreive current user details
      // this.authService.currentTourOpertor().subscribe(res=>{
      //   if(!res) return
      //   else {
      //     this.tourOperator = res
      //    }
      // })  
    }

    //logout
    // logMeOut(){
    //     this.authService.logout()
    //     this.logoutSuccess()
    //     this.router.navigate(['auth/sign-in'])
    // }

  // Success Type Alert
  // logoutSuccess(){
  //   alertFunctions.logoutSuccessfuly()
  // }
}
