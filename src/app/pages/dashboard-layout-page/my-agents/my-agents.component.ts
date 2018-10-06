import { Component, OnInit } from '@angular/core';
import { TourOperatorsService } from '../../../core/services/tour-operators/tour-operators.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as alertFunctions from '../../../shared/data/sweet-alerts';

@Component({
  selector: 'app-my-agents',
  templateUrl: './my-agents.component.html',
  styleUrls: ['./my-agents.component.scss']
})
export class MyAgentsComponent implements OnInit {

  myAgents: any[]
  mySelectedAgent:any[]
  agent: any;
  about: any;
  logoUrl: any;
  activity: any;
  status: any;
  date: Date;
  constructor(
    private tourOperatorsService:TourOperatorsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private modalService:NgbModal) { 

      //get agents
      this.tourOperatorsService.getMyAgents().subscribe(res=>{
        this.myAgents = res
        console.log("from my agents component",this.myAgents)
      })

      //get agent details from url parameter
     this.route.params.subscribe(params => {
      this.agent = params['agent']
      this.about = params['about']
      this.logoUrl = params['logoUrl']
      this.activity = params['activity']
      this.status = params['status']

    })
      console.log(this.agent)

    }

    ngOnInit() {
      //update user id in local storage if user is online
      this.authService.checkIfUserIsOnline().subscribe(user=>{
        if(!user) return
        else{
          localStorage.setItem("currentUserId", user.uid)
        }
      })
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

    
      // Open modal with dark section
      openModal(customContent, agent) {
        this.mySelectedAgent=agent
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
      }

      connectWithMyAgent(){
        this.typeSuccess()

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