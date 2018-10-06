import { Component, OnInit } from '@angular/core';
import { TourOperatorsService } from '../../../core/services/tour-operators/tour-operators.service';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  transactionLogs: any[]
  constructor(
    private tourOperatorsService:TourOperatorsService,
    private authService: AuthService) {
      this.tourOperatorsService.getPaymentTransactions().subscribe(res=>{
        this.transactionLogs = res
      })

     }

  ngOnInit() {
    //update user id in local storage if user is online
    this.authService.checkIfUserIsOnline().subscribe(user=>{
      if(!user) return
      else{
        localStorage.setItem("currentUserId", user.uid)
      }
    })
  }

}
