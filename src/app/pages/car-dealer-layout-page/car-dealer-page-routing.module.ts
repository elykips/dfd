import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarDealerLayoutPageComponent } from './car-dealer-layout-page.component';
import { CarDealerProfileComponent } from './car-dealer-profile/car-dealer-profile.component';



const routes: Routes = [
  {
    path: '',
    component: CarDealerLayoutPageComponent,
    children: [
      {
          path: 'profile',
          component: CarDealerProfileComponent,
          data: {
              title: 'Profile'
          }
      },
    ]

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarDealerPageRoutingModule { }
