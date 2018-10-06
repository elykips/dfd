import { Routes, RouterModule } from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const GUEST_ROUTES: Routes = [
     {
        path: 'guests',
        loadChildren: './pages/guest-layout-page/guest-pages.module#GuestPagesModule'
      },
      {
        path: 'auth',
        loadChildren: './core/core.module#CoreModule'
      },
      {
        path: 'payments',
        loadChildren: './payment/payment.module#PaymentModule'
      }
];