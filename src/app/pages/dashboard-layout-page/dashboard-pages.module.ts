import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DashboardPagesRoutingModule } from "./dashboard-pages-routing.module";
import { PaymentModule } from '../../payment/payment.module';

import { DashboardLayoutPageComponent } from './dashboard-layout-page.component';
import { OverviewComponent } from './overview/overview.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { PaymentsComponent } from './payments/payments.component';
import { ToursComponent } from './tours/tours.component';
import { MyAgentsComponent } from './my-agents/my-agents.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyEnquiriesComponent } from './my-enquiries/my-enquiries.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { NewTourComponent } from './tours/new-tour/new-tour.component';
import { TourDetailsComponent } from './tours/tour-details/tour-details.component';
import { CreateProfileComponent } from './my-profile/create-profile/create-profile.component';
  

// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';
import { SocialMediaComponent } from './social-media/social-media.component';
import { TravelInsightsComponent } from './travel-insights/travel-insights.component';
import { ReceivePaymentsComponent } from './receive-payments/receive-payments.component';
import { SweetAlertsComponent } from '../../shared/sweet-alerts/sweet-alerts.component';
import { NgbTab, NgbTabsetModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { PaymentDashboardComponent } from './payment-dashboard/payment-dashboard.component';
import { UploadsFormComponent } from './uploads-form/uploads-form.component';
import { DataTablesModule } from './data-tables/data-tables.module';
import { DtTablesComponent } from './data-tables/dt-tables/dt-tables.component';

import { SharedModule } from '../../shared/shared.module';
import { CalendarsComponent } from '../../shared/calendar/calendar.component';
// import { CalendarComponent, CalendarsComponent } from '../../shared/calendar/calendar.component';






@NgModule({
    imports: [

    CommonModule,
        DashboardPagesRoutingModule,
        FormsModule,
        NgbTabsetModule,
        PaymentModule,
        ReactiveFormsModule,
        NgbModule,
        SharedModule
        // DataTablesModule
        
 
    ],
    declarations: [       
        DashboardLayoutPageComponent,
        OverviewComponent,
        BookingsComponent,
        MarketplaceComponent,
        PaymentsComponent,
        ToursComponent,
        MyAgentsComponent,
        MyProfileComponent,
        MyEnquiriesComponent,
        MySubscriptionComponent,
        PaymentOptionsComponent,
        NewTourComponent,
        TourDetailsComponent,
        SocialMediaComponent,
        TravelInsightsComponent,
        ReceivePaymentsComponent,
        SweetAlertsComponent,
        AgentDetailsComponent,
        PaymentDashboardComponent,
        UploadsFormComponent,
        CalendarsComponent
        // CalendarComponent
        // DtTablesComponent
        // CreateProfileComponent
    ]
})
export class DashboardPagesModule { }
