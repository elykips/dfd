import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GuestPagesRoutingModule } from "./guest-pages-routing.module";
import { PaymentModule } from '../../payment/payment.module';

import { GuestLayoutPageComponent } from './guest-layout-page.component';
import { CreateProfileComponent } from '../dashboard-layout-page/my-profile/create-profile/create-profile.component';
import { GuestToursComponent } from './guest-tours/guest-tours.component';
import { GuestTourDetailsComponent } from './guest-tour-details/guest-tour-details.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarsComponent } from './cars/cars.component';
import { ShippingComponent } from './shipping/shipping.component';
import { RegisterCarDealerComponent } from './register-car-dealer/register-car-dealer.component';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
    imports: [
CommonModule,
        GuestPagesRoutingModule,
        SharedModule,
        FormsModule,
        PaymentModule,
        ReactiveFormsModule
     
    ],
    declarations: [
        HomeComponent,
        GuestLayoutPageComponent,
        CreateProfileComponent,
        GuestToursComponent,
        GuestTourDetailsComponent,
        AboutUsComponent,
        CarsComponent,
        ShippingComponent,
        RegisterCarDealerComponent
    ]
})
export class GuestPagesModule { }
