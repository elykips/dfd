import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard-layout-page/dashboard-pages.module#DashboardPagesModule'
  },
  {
    path: 'tables',
    loadChildren: './pages/dashboard-layout-page/data-tables/data-tables.module#DataTablesModule'
  }
];