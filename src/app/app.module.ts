
//import forms module
import { NgModule, ViewContainerRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ControlContainer, FormBuilder } from '@angular/forms';

// angularfirebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

//import auth services
import { AuthService } from './core/services/auth/auth.service';
import { PaymentService } from './core/services/payment/payment.service';

 
//import components
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './layouts/dashboard/dashboard-layout.component';
import { GuestLayoutComponent } from './layouts/guest/guest-layout.component';

// import env variables
import { environment } from 'environments/environment';

import * as $ from 'jquery';
import { TourOperatorsService } from './core/services/tour-operators/tour-operators.service';
import { WindowService } from './core/services/phone-auth/window.service';
import { BrowserModule } from '@angular/platform-browser';
import { GuestsService } from './core/services/guests/guests.service';
import { UploadsService } from './core/services/uploads/uploads.service';
import { CarDealerLayoutComponent } from './layouts/car-dealer/car-dealer-layout.component';
// import { PaymentModule } from './payment/payment.module'; 
 








@NgModule({
    declarations: [
        AppComponent,
        DashboardLayoutComponent,
        GuestLayoutComponent,
        CarDealerLayoutComponent 
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule,
        SharedModule, 
        NgbModule.forRoot(), 
        FormsModule,
        BrowserModule,
 
        // PaymentModule
    ],
    providers: [
        AngularFireAuth,
        AngularFirestoreModule,
        AngularFirestore,
        AngularFireDatabase,
        AuthService,
        TourOperatorsService,
        GuestsService,
        PaymentService,
        UploadsService,
        FormBuilder
        // ControlContainer.
    ],
    bootstrap: [AppComponent]
})
export class AppModule {  
} 
 