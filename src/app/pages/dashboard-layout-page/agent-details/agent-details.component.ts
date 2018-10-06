import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourOperatorsService } from '../../../core/services/tour-operators/tour-operators.service';
import * as alertFunctions from '../../../shared/data/sweet-alerts';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { channels } from '../../../shared/data/channels';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss']
})
export class AgentDetailsComponent implements OnInit {
  // agent: any;
  // location: any;
  // logoUrl: any;
  // activityUrl: any;
  // date: Date;

  mySelectedAgent
  errorMessage: string;
  successMessage: string;
 

  constructor(
    private tourOperatorsService: TourOperatorsService,
    private modalService:NgbModal,
    private route: ActivatedRoute,
    private router: Router) {

      this.mySelectedAgent = tourOperatorsService.selectedAgent
      console.log("selected agent: ",this.mySelectedAgent)
     }

  ngOnInit() {
    //get package details from url parameter
    // this.route.params.subscribe(params => {
    //   this.agent = params['agent']
    //   this.location = params['location']
    //   this.logoUrl= params['logoUrl']
    //   this.activityUrl = params['activityUrl']
    //   this.date = params['date']
    //   console.log(this.agent,this.location, this.logoUrl, this.activityUrl)
    // })
  }

  //Add agent to my preferene
  saveMyAgent(selectedAgent){
    this.tourOperatorsService.saveMyAgent(
      {
        userId:localStorage.getItem("currentUserId"),
        name:selectedAgent.channel,
        about:selectedAgent.location,
        logoUrl: selectedAgent.logoUrl,
        activity: selectedAgent.bookingActivityImageUrl,
        connectionStatus:'Pending..',
        date:new Date() 
     })
    .then(res => {
      this.errorMessage = "";
      this.successMessage = "Succesfully Saved";
      this.agentAddedSuccess()
      this.router.navigate(['dashboard/my-channels']) 
    }, err => {
      this.errorMessage = err.message;
      this.successMessage = "";
    })

  }

   // Success Type Alert
  agentAddedSuccess(){
    alertFunctions.agentAddeSuccessfuly()
  }

  // Open default modal
  open(content) {
    this.modalService.open(content).result.then((result) => {
       let closeResult = `Closed with: ${result}`;
    }, (reason) => {
        let closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

// This function is used in open
private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
}


}
