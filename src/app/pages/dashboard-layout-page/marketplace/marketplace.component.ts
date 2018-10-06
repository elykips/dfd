import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AgentsService } from '../../../core/services/agents/agents.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TourOperatorsService } from '../../../core/services/tour-operators/tour-operators.service';
import * as alertFunctions from '../../../shared/data/sweet-alerts';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MarketplaceComponent implements OnInit {

  channels:Array<any>
  agent: string;
  location: string;
  logoUrl: string;
  activityUrl: string;
  date: Date;

  errorMessage: string;
  successMessage: string;


    
  constructor(
    private agentsService: AgentsService,
    private modalService:NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private tourOperatorsService: TourOperatorsService) {
      this.channels = this.agentsService.getChannels();
     }

  ngOnInit() {
     //get package details from url parameter
     this.route.params.subscribe(params => {
      this.agent = params['agent']
      this.location = params['location']
      this.logoUrl= params['logoUrl']
      this.activityUrl = params['activityUrl']
      this.date = params['date']
      console.log(this.agent,this.location, this.logoUrl, this.activityUrl)
   });
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




  saveMyAgent(agent){
    this.tourOperatorsService.saveMyAgent(
      {
        userId:localStorage.getItem("currentUserId"),
        name:this.agent,
        about:this.location,
        logoUrl:this.logoUrl,
        activity:this.activityUrl,
        connectionStatus:'Pending',
        date:new Date() 
     })
    .then(res => {
      this.errorMessage = "";
      this.successMessage = "Succesfully Saved";
      this.typeSuccess()
    }, err => {
      this.errorMessage = err.message;
      this.successMessage = "";
      // this.bankForm.reset();
      // this.mobileMoneyForm.reset();
    })

  }

  saveAgentToFavourites(channel){
    this.tourOperatorsService.saveToFav(channel)
    this.router.navigate(['dashboard/agent-details'])
  }

    
       // Simple Alert
       basicAlert(){
        alertFunctions.basicAlert();
      }
      // Alert with Title
      withTitle(){
        alertFunctions.withTitle();
      }
      // Question Type Alert
      typeQuestion(){
        alertFunctions.typeQuestion();
      }
      // Success Type Alert
      typeSuccess(){
        alertFunctions.typeSuccess();
      }
      // Info Type Alert
      typeInfo(){
        alertFunctions.typeInfo();
      }
      // Warning Type Alert
      typeWarning(){
        alertFunctions.typeWarning();
      }
      // Error Type Alert
      typeError(){
        alertFunctions.typeError();
      }
      // Custom Icon 
      customIcon(){
        alertFunctions.customIcon();
      }
      // Auto close timer
      autoClose(){
        alertFunctions.autoClose();
      }
      // Allow Outside Click
      outsideClick(){
        alertFunctions.outsideClick();
      }
      // Ajax Request
      ajaxRequest(){
        alertFunctions.ajaxRequest();
      }
      // Button Options
      customButton(){
        alertFunctions.customButton();
      }
      // Confirm Button Action
      confirmText(){
        alertFunctions.confirmText();
      }
      // Confirm & Cancel Button
      confirmCancelButton(){
        alertFunctions.confirmCancelButton();
      }
      // Chaining modals / Steps
      steps(){
        alertFunctions.steps();
      }
  

}
