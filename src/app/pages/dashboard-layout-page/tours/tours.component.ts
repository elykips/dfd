import { Component, OnInit } from '@angular/core';
import { TourOperatorsService } from '../../../core/services/tour-operators/tour-operators.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent{

  tourDetails:any[]
  tourOperator:any[]
  tourId: string;
  constructor(
    private tourOperatorsService: TourOperatorsService,
    private router: Router,
  ) {
    this.tourOperatorsService.getMyTours().subscribe(res=>{
      this.tourDetails = res
      console.log("from tours  and type ",res)

   })

   //fetch tour operator details
   this.tourOperatorsService.currentTourOpertorBusiness().subscribe(res=>{
     this.tourOperator = res
     console.log("from tours component ",res)
   })

  }

  sendTourObjectToDetailsPage(tourId){
    this.tourOperatorsService.saveTourId(tourId)
    this.router.navigate(['dashboard/tour-details'])
  }



}
