import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth/auth.service';
import { channels } from '../../../shared/data/channels';


@Injectable({
  providedIn: 'root'
})
export class TourOperatorsService {
  selectedAgent={}

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore) { 
      this.authService.checkIfUserIsOnline().subscribe(res=>{
        localStorage.setItem("currentUserId",res.uid)
      })
      
    } 
    //get current tour operator business profile
    currentTourOpertorBusiness(){
      return this.afs.collection('businessProfiles', ref=>ref.where('userId', '==', localStorage.getItem("currentUserId"))).valueChanges()
    }

    //Login With credentials
    payForSubscription(money){
      return new Promise<any>((resolve, reject) => {
        this.afs.collection('payments').add(money)
        .then(res => {
          resolve(res);
          this.saveLogs({
            userId:localStorage.getItem("currentUserId"),
            action:"Subscription Payment",
            date: money.date
          })
        }, err => reject(err))
      })
    }

    //payment logger
    saveLogs(log){
      return new Promise<any>((resolve, reject) => {
        this.afs.collection('logs').add(log)
        .then(res => {
          resolve(res);
          console.log("Tour Operator Service: logging succesfull",log)
        }, err => reject(err))
      })
    }
    
  saveAgentsToMyChannels(chanel){
    this.afs.collection('myChannels').add(chanel)

  }

  getPaymentTransactions(){
    return this.afs.collection('payments', ref=>ref.where('userId', '==', localStorage.getItem("currentUserId"))).valueChanges()
  }

  getMyBookings(){
    return this.afs.collection('bookings', ref=>ref.where('userId', '==', localStorage.getItem("currentUserId"))).valueChanges()
  }

  getMyTours(){
    return this.afs.collection('myTours', ref=>ref.where('userId', '==', localStorage.getItem("currentUserId")))
    .snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const type = a.type;
        return { type,id, ...data}
      });
    });

    
  }




  createBusinessProfile(business){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('businessProfiles').add(business)
      .then(res => {
        resolve(res);
        console.log(business)
        this.saveLogs({
          userId:localStorage.getItem("currentUserId"),
          action:"Create Business Profile",
          date: business.date
        })
      }, err => reject(err))
    })
  }


 saveMyAgent(myAgent){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('myAgents').add(myAgent)
      .then(res => {
        resolve(res);
        console.log(myAgent)
        this.saveLogs({
          userId:localStorage.getItem("currentUserId"),
          action:"Added Agent "+myAgent.name,
          date: myAgent.date
        })
      }, err => reject(err))
    })
  }

  //store fav agent
  saveToFav(selectedAgent){
    this.selectedAgent = selectedAgent
  }

  viewSelectedAgent(){
     return this.selectedAgent
  }

  getMyAgents(){
    return this.afs.collection('myAgents', ref=>ref.where('userId', '==', localStorage.getItem("currentUserId"))).valueChanges()
  }

  connectWithOta(){
    // return this.afs.collection('myAgents', ref=>ref.where('userId', '==', localStorage.getItem("currentUserId"))).valueChanges()
  }

  createTour(tour){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('myTours').add(tour)
      .then(res => {
        resolve(res);
        console.log("Console from tourOperator service: ",tour)
        this.saveLogs({
          userId:localStorage.getItem("currentUserId"),
          action:"Added Tour "+tour.name,
          date: tour.date
        })
      }, err => reject(err))
    })
  }

  saveTourId(tourId){
    localStorage.setItem("tourId",tourId)
  }

  getTourDetails(){
    return this.afs.collection("myTours").doc(localStorage.getItem("tourId")).valueChanges()

  }

  //paymentOptions

  savePaymentOptions(option){
    // return this.afs.collection("paymentOptions")
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('paymentProfiles').add(option)
      .then(res => {
        resolve(res);
        this.saveLogs({
          userId:localStorage.getItem("currentUserId"),
          action:"Added Payment option",
          date: option.date
        })
      }, err => reject(err))
    })
  }

  //Fetch payment details for current user
  getMyPaymentProfile(){
    return this.afs.collection('paymentProfiles', ref=>ref.where('userId', '==', localStorage.getItem("currentUserId"))).valueChanges()

  }


}
 