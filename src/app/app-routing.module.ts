import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

//import layouts (guest and dashboard)
import { DashboardLayoutComponent } from './layouts/dashboard/dashboard-layout.component';
import { GuestLayoutComponent } from './layouts/guest/guest-layout.component';
import { CarDealerLayoutComponent } from './layouts/car-dealer/car-dealer-layout.component';



import { DASHBOARD_ROUTES } from "./shared/routes/dashboard-layout.routes";
import { GUEST_ROUTES } from "./shared/routes/guest-layout.routes";
import { CAR_DEALER_ROUTES } from "./shared/routes/car-dealer-layout.routes";


const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'guests/home',
    pathMatch: 'full',
  },
  { path: '', component: DashboardLayoutComponent, data: { title: 'dashboard layout' }, children: DASHBOARD_ROUTES },
  { path: '', component: GuestLayoutComponent, data: { title: 'Guest layout' }, children: GUEST_ROUTES },
  { path: '', component: CarDealerLayoutComponent, data: { title: 'Car Dealers' }, children: CAR_DEALER_ROUTES },
];  
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
