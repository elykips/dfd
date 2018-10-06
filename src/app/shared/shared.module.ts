import { NgModule } from '@angular/core';
 import { CommonModule } from "@angular/common";
 import { RouterModule } from "@angular/router";

 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 import { TourComponent } from './tour/tour.component';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
// import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
// import { CalendarComponent } from './calendar/calendar.component';

// import { SharedModule } from './shared.module';
 
@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ToggleFullscreenDirective,
        NgbModule,

    ],
    imports:[
        RouterModule,
        CommonModule,
        NgbModule,
        CalendarModule.forRoot(),
        // SharedModule
        
    ], 
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ToggleFullscreenDirective,
        TourComponent,
        // CalendarComponent
        // SweetAlertsComponent
        ]   
})
export class SharedModule { }
