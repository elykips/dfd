import { Component, OnInit, ViewChild } from '@angular/core';
import { TourOperatorsService } from '../../../core/services/tour-operators/tour-operators.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as alertFunctions from './../../../shared/data/sweet-alerts';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {

  @ViewChild('bankForm') bankForm: NgForm;
  @ViewChild('mobile') mobileMoneyForm: NgForm;
  errorMessage: string;
  successMessage: string;
  package: string;
  price: string;

  constructor(
    private tourOperatorsService: TourOperatorsService,
    private router: Router,
    private route: ActivatedRoute) { 
    
    }

  ngOnInit() {
      //get package details from url parameter
      this.route.params.subscribe(params => {
        this.package = params['package']
        this.price = params['price']
     });
  }

  payForMySubscription(payment){
    this.tourOperatorsService.payForSubscription(
      {
        userId:localStorage.getItem("currentUserId"),
        package:this.package,
        price: this.price,
        provider: payment.provider,
        amountPaid:payment.amount,
        purpose: "subscription",
        status:"Pending",
        date:new Date() 
     })
    .then(res => {
      this.errorMessage = "";
      this.successMessage = "Payment Succesful";
      this.paymentSuccess()
      this.router.navigate(['dashboard/payments'])
    }, err => {
      this.errorMessage = err.message;
      this.successMessage = "";
      this.bankForm.reset();
      this.mobileMoneyForm.reset();
    })

  }
  paymentSuccess(){
    alertFunctions.paymentSuccess()
  }
}
