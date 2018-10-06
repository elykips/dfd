import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestLayoutPageComponent } from './guest-layout-page.component';
import { CreateProfileComponent } from '../dashboard-layout-page/my-profile/create-profile/create-profile.component';
import { GuestToursComponent } from './guest-tours/guest-tours.component';
import { GuestTourDetailsComponent } from './guest-tour-details/guest-tour-details.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarsComponent } from './cars/cars.component';
import { ShippingComponent } from './shipping/shipping.component';
import { RegisterCarDealerComponent } from './register-car-dealer/register-car-dealer.component';


const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home Page'
        }
      },
      { 
        path: 'about-us',
        component: AboutUsComponent,
        data: {
          title: 'About Us'
        }
      },
      {
        path: 'cars',
        component: CarsComponent,
        data: {
          title: 'Cars'
        }
      },
      {
        path: 'shipping',
        component: ShippingComponent,
        data: {
          title: 'Shipping'
        }
      },
      {
        path: 'register',
        component: RegisterCarDealerComponent,
        data: {
          title: 'Register As Dealer'
        }
      },
    ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestPagesRoutingModule { }
