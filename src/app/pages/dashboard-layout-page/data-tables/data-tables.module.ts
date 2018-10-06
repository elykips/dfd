import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';                    
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesRoutingModule } from './data-tables-routing.module';
import { DtTablesComponent } from './dt-tables/dt-tables.component';

// declare var require: any;
import { data }from '../../../shared/data/company';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    DataTablesRoutingModule
  ],
  declarations: [
    DtTablesComponent
  ]
})
export class DataTablesModule {

    rows = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;                           

    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];       

  constructor(){
    this.rows = data;
    setTimeout(() => { this.loadingIndicator = false; }, 1500);                                   

  }
 }
