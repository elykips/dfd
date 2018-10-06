import { Component, OnInit, HostListener } from '@angular/core';
import { PaymentService } from '../../core/services/payment/payment.service';
import { environment } from '../../../environments/environment';
environment

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

  handler:any;
  amount: number = 500;

  constructor(
    private paymentSvc: PaymentService) {

     }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key:environment.stripeKey,
      // image:'',
      locale:'auto',
      token: token=>{
        this.paymentSvc.processPayment(token, this.amount)
      }

    });
  }

  handlePayment(){
    this.handler.open({
      name:'Ziara',
      image:'https://www.afrikaziara.com/images/logo/ziara.png',
      excerpt: 'Make Payment',
      amount: this.amount
    })
  }

  @HostListener('window:popstate')
    onpopstate(){
      this.handler.close()
    }

}
