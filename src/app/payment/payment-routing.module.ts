import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakePaymentComponent} from './make-payment/make-payment.component';
import { Routes, RouterModule } from '@angular/router';
import { StripeCallbackComponent } from './stripe-callback/stripe-callback.component';


const routes: Routes = [
  {
    path: '',
    // component: DashboardLayoutPageComponent,
    children: [
      {
          path: 'make-payment',
          component: MakePaymentComponent,
          data: {
              title: 'Make Payment'
          }
      },
      {
        path: 'stripe-callback',
        component: StripeCallbackComponent,
        data: {
            title: 'Stripe Callback'
        }
    }
    ]

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PaymentRoutingModule { }
