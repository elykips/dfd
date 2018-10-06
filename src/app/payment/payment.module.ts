import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakePaymentComponent } from './make-payment/make-payment.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { StripeCallbackComponent } from './stripe-callback/stripe-callback.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule 
  ],
  declarations: [
    MakePaymentComponent,
    StripeCallbackComponent
  ]
})
export class PaymentModule { }
