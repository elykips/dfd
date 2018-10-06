import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CarDealerPageRoutingModule } from "./car-dealer-page-routing.module";
import { CarDealerLayoutPageComponent } from './car-dealer-layout-page.component';
import { CarDealerProfileComponent } from './car-dealer-profile/car-dealer-profile.component';
  

// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';
import { SweetAlertsComponent } from '../../shared/sweet-alerts/sweet-alerts.component';
import { NgbTab, NgbTabsetModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../../shared/shared.module';
import { CalendarsComponent } from '../../shared/calendar/calendar.component';

// import { CalendarComponent, CalendarsComponent } from '../../shared/calendar/calendar.component';






@NgModule({
    imports: [

    CommonModule,
    CarDealerPageRoutingModule,
        FormsModule,
        NgbTabsetModule,
        ReactiveFormsModule,
        NgbModule,
        SharedModule
        // DataTablesModule
        
 
    ],
    declarations: [       
        CarDealerLayoutPageComponent,
        CarDealerProfileComponent
    ]
})
export class CarDealerPageModule { }
