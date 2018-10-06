import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer

export const CAR_DEALER_ROUTES: Routes = [
  {
     path: 'dealers',
     loadChildren: './pages/car-dealer-layout-page/car-dealer-page.module#CarDealerPageModule'
   },
];