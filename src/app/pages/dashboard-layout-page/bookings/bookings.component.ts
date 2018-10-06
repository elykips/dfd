import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { TourOperatorsService } from '../../../core/services/tour-operators/tour-operators.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  bookingDetails: any[]
  constructor(
    private tourOperatorsService:TourOperatorsService,
    private authService: AuthService) {

      this.tourOperatorsService.getMyBookings().subscribe(res=>{
        this.bookingDetails = res
        console.log(this.bookingDetails)
     })
  }
  ngOnInit() {
  }

}
