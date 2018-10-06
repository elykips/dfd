import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  agents =[
  {
    "logoUrl": "https://img.rezdy.com/LOGO/20206/industry_stories_june_0001_Layer_2_tb.jpg",
    "channel": "Expedia",
    "category":"Online Travel Agency",
    "location": "Bellevue, United States",
    "dateJoined": "With Rezdy Since Feb 2015",
    "bookings":"5",
    "bookingActivityImageUrl": "https://static.rezdy.com/1529473214699/themes/rezdyv2/images/booking-activity-level-6.svg"
  },
  {
    "logoUrl": "https://img.rezdy.com/LOGO/17024/viator_tb.png",
    "channel": "Viator",
    "category":"Online Travel Agency ",
    "location": "Sydney, Australia",
    "dateJoined": "With ziara Since Feb 2014",
    "bookings":"8",
    "bookingActivityImageUrl": "https://static.rezdy.com/1529473214699/themes/rezdyv2/images/booking-activity-level-6.svg"
  },
  {
    "logoUrl": "https://img.rezdy.com/LOGO/14465/gyg_logo_tb.png",
    "channel": "GetYourGuide",
    "category":"Online Travel Agency ",
    "location": "Berlin, Germany",
    "dateJoined": "With ziara Since Oct 2013",
    "bookings":"7",
    "bookingActivityImageUrl": "https://static.rezdy.com/1529473214699/themes/rezdyv2/images/booking-activity-level-6.svg"
  },
  {
    "logoUrl": "https://img.rezdy.com/LOGO/10557/rb_logo_horizontal_w_tagline_tb.jpg",
    "channel": "RedBalloon",
    "category":"Online Travel Agency ",
    "location": "Sydney, Australia",
    "dateJoined": "With ziara Since Apr 2014",
    "bookings":"9",
    "bookingActivityImageUrl": "https://static.rezdy.com/1529473214699/themes/rezdyv2/images/booking-activity-level-6.svg"
  }
];


  constructor() { }
  

}
