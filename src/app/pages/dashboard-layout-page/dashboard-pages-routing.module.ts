import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { SocialMediaComponent } from './social-media/social-media.component';
import { TravelInsightsComponent } from './travel-insights/travel-insights.component';
import { ReceivePaymentsComponent } from './receive-payments/receive-payments.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { PaymentDashboardComponent } from './payment-dashboard/payment-dashboard.component';
import { UploadsFormComponent } from './uploads-form/uploads-form.component';


const routes: Routes = [
  {
    path: '',
    // component: DashboardLayoutPageComponent,
    children: [
      {
          path: 'overview',
          component: OverviewComponent,
          data: {
              title: 'Overview'
          }
      },
      {
        path: 'bookings',
        component: BookingsComponent,
        data: {
            title: 'Bookings'
        }
      },
      {
        path: 'my-channels',
        component: MyAgentsComponent,
        data: {
            title: 'My Channels'
        }
      },
      {
        path: 'my-channels/:agent/:about/:logoUrl/:activity/:status',
        component: MyAgentsComponent,
        data: {
            title: 'My Agent'
        }
      },
      {
        path: 'marketplaces',
        component: MarketplaceComponent,
        data: {
            title: 'Marketplace Prams'
        }
      },
      {
        path: 'marketplace/:agent/:logoUrl/:location/:activityUrl/:date',
        component: MarketplaceComponent,
        data: {
            title: 'Marketplace Prams'
        }
      },
      {
        path: 'payments',
        component: PaymentsComponent,
        data: {
            title: 'Payments'
        }
      },
      {
        path: 'new-tour',
        component: NewTourComponent,
        data: {
            title: 'New Tour'
        }
      },
      {
        path: 'tours',
        component: ToursComponent,
        data: {
            title: 'Tours'
        }
      },
      {
        path: 'tour-details',
        component: TourDetailsComponent,
        data: {
            title: 'Tour Details'
        }
      },
      {
        path: 'agent-details',
        component: AgentDetailsComponent,
        data: {
            title: 'Agent Details'
        }
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
        data: {
            title: 'Tours'
        }
      },
      {
        path: 'my-enquiries',
        component: MyEnquiriesComponent,
        data: {
            title: 'My Enquiries'
        }
      },
      {
        path: 'my-subscription',
        component: MySubscriptionComponent,
        data: {
            title: 'My Subscription'
        }
      },
      {
        path: 'payment-options/:package/:price',
        component: PaymentOptionsComponent,
        data: {
            title: 'Payment Options'
        }
      },
      {
        path: 'social-media',
        component: SocialMediaComponent,
        data: {
            title: 'Social Media'
        }
      },
      {
        path: 'insights',
        component: TravelInsightsComponent,
        data: {
            title: 'Travel Insights'
        }
      },
      {
        path: 'receive-payments',
        component: ReceivePaymentsComponent,
        data: {
            title: 'Receive Payments'
        }
      },
      {
        path: 'payment-dashboard',
        component: PaymentDashboardComponent,
        data: { 
            title: 'Payment Dashboard'
        }
      },
      {
        path: 'uploads-form',
        component: UploadsFormComponent,
        data: {
            title: 'Uploads Form'
        }
      }
    ]

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPagesRoutingModule { }
