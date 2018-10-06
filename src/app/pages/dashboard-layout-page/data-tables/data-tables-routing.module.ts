import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DtTablesComponent } from './dt-tables/dt-tables.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'table1',
        component: DtTablesComponent,
        data: {
          title: 'Data Table'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTablesRoutingModule { }