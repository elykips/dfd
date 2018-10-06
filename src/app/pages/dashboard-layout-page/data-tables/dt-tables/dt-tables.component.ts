import { Component, OnInit, ViewChild } from '@angular/core';
import { channels } from '../../../../shared/data/channels';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: 'app-dt-tables',
  templateUrl: './dt-tables.component.html',
  styleUrls: ['./dt-tables.component.scss']
})
export class DtTablesComponent {

  // rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  // DataTable Content Titles
  columns = [
      { prop: 'channel' },
      { name: 'location' },
      { name: 'dateJoined' }
      // { name: 'logoUrl' },
      // { name: 'bookingActivityImageUrl' }
  ];

  rows: any[] = [];
  temp = [];
  selected: any[] = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor() {
      this.temp = [...channels];
      this.rows = channels;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

    //  On select of dataTable's data row
    onSelect(event) {
      //your code here
     }
   
     //  On Activation of dataTable's data row
     onActivate(event) {
       //your code here
     }

     updateFilter(event) {
      const val = event.target.value.toLowerCase();

      // filter our data
      const temp = this.temp.filter(function (d) {
          return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      });

      // update the rows
      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
  }

}
