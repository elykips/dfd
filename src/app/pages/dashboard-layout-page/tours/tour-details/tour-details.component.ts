import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourOperatorsService } from '../../../../core/services/tour-operators/tour-operators.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit {

  tourDetails:any;
  constructor(
    private tourOperatorsService:TourOperatorsService) { 
     this.tourOperatorsService.getTourDetails().subscribe(res=>{
       this.tourDetails=res
       console.log(res)
     })
      
    }

    ngOnInit() {
      
  }

}
