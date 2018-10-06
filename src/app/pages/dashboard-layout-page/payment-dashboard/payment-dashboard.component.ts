import { Component, OnInit } from '@angular/core';
import { NgbCollapse, NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TourOperatorsService } from '../../../core/services/tour-operators/tour-operators.service';
import * as alertFunctions from './../../../shared/data/sweet-alerts';

@Component({
  selector: 'app-payment-dashboard',
  templateUrl: './payment-dashboard.component.html',
  styleUrls: ['./payment-dashboard.component.scss']
})
export class PaymentDashboardComponent implements OnInit {

  acc: any;
  errorMessage: string;
  successMessage: string;
  // Prevent panel toggle code
  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === '2') {
      $event.preventDefault();
    }
    if ($event.panelId === '3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };

  bankForm: FormGroup;
  mobileMoneyForm: FormGroup;
  myPaymentProfile: any[];
  
  constructor(
    private fb: FormBuilder,
    private tourOperatorsService: TourOperatorsService) {
      
      // retreive payment profile for current user
      this.tourOperatorsService.getMyPaymentProfile().subscribe(res=>{
          this.myPaymentProfile = res
      })
     }

  ngOnInit() {
    this.myPaymentProfile=[]
    this.buildBankForm()
    this.buildMobileMoneyForm()
  }

  //bank form
  buildBankForm(){
    this.bankForm = this.fb.group({
      bankName: new FormControl('Equity Bank', Validators.required),
      accountNumber: new FormControl('09567843890', Validators.required),
      accountName: new FormControl('Elkana Rop', Validators.required),
      branch: new FormControl('Nairobi CBD', Validators.required),
      swiftCode: new FormControl('BF456O'),
      country: new FormControl('Kenya',  Validators.required),
    })
  }

  //get methods for bank form

  get bankName(){
    return this.bankForm.get('bankName')
  }

  get accountName(){
    return this.bankForm.get('accountName')
  } 
  
  get accountNumber(){
    return this.bankForm.get('accountNumber')
  }

  get branch(){
    return this.bankForm.get('branch')
  }

  get swiftCode(){
    return this.bankForm.get('swiftCode')
  }

  get country(){
    return this.bankForm.get('country')
  }

  //mobile money form
  buildMobileMoneyForm(){
    this.mobileMoneyForm = this.fb.group({
      provider: new FormControl('Safaricom', Validators.required),
      customerName: new FormControl('Elkana Rop', Validators.required),
      phoneNumber: new FormControl('+254703283383', Validators.required ),
      identificationNumber: new FormControl('29342497', Validators.required ),
    })
  }


   //get methods for mobile money form
  get provider(){
    return this.mobileMoneyForm.get('provider')
  }

  get customerName(){
    return this.mobileMoneyForm.get('customerName')
  }

  get phoneNumber(){
    return this.mobileMoneyForm.get('phoneNumber')
  }

  get identificationNumber(){
    return this.mobileMoneyForm.get('identificationNumber')
  }

  //bank payment object
  get bankPaymentOption(){
    return {
      userId:localStorage.getItem("currentUserId"),
      bank: this.bankName.value,
      branch: this.branch.value,
      accountName: this.accountName.value,
      accountNumber: this.accountNumber.value,
      swiftCode: this.swiftCode.value,
      country: this.country.value,
      date:new Date(),

    }
  }

   //mobile money payment object
   get mobileMoneyPaymentOption(){
    return {
      userId:localStorage.getItem("currentUserId"),
      provider: this.provider.value,
      account: this.phoneNumber.value,
      customer: this.customerName.value,
      nationalId: this.identificationNumber.value,
      date:new Date(),

    }
  }

  //save mobile money payment prefference
  saveMobileMoneyPreference(){
    this.tourOperatorsService.savePaymentOptions(this.mobileMoneyPaymentOption)
    .then(res => {
      this.errorMessage = "";
      this.successMessage = "Succesfully Saved";
      this.addPaymentMethodSuccess()
    }, err => {
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

  //save bank payment prefference
  saveBankPreference(){
    this.tourOperatorsService.savePaymentOptions(this.bankPaymentOption)
    .then(res => {
      this.errorMessage = "";
      this.successMessage = "Succesfully Saved";
      this.addPaymentMethodSuccess()
    }, err => {
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

  // Success Type Alert
  addPaymentMethodSuccess(){
    alertFunctions.paymentMethodAddedSuccesfully()
  }


}
