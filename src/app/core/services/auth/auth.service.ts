import { Injectable } from '@angular/core';

//import firebase dependencies
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import 'firebase/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";

//import observable from rxjs
import { Observable } from 'rxjs/Observable';
import { reject } from 'q';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    private afAuth: AngularFireAuth, 
    private db: AngularFireDatabase,
    private afs: AngularFirestore,
    private router: Router) {
      
     }

   // check current user
   checkIfUserIsOnline(){
    return this.afAuth.authState
   }

 


   

  // create personal account
  signUp(person){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(person.email, person.password)
      .then(res => {
        resolve(res);
        this.afs.collection("/tourOperators").add({
          userId: res.user.uid,
          name: person.fullName,
          loginTime: res.user.metadata.creationTime,
          photoURL: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        })
      }, err => reject(err))
    })
  }
  
  //Login With credentials
  signIn(credentials){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(res => {
        resolve(res);
        localStorage.setItem("currentUserId", res.user.uid)
      }, err => reject(err))
    })
  }
  
  //fetch tour operator from firestore
  currentTourOpertor(){
    let tourOperatorRef = this.afs.collection('tourOperators', ref=>ref.where('userId', '==', localStorage.getItem("currentUserId")))
    return tourOperatorRef.valueChanges()
  }



  //Logout
  logout(){
    return new Promise<any>((resolve, reject) => {
    this.afAuth.auth.signOut()
    .then(res=>{
      resolve(res)
      localStorage.removeItem("currentUserId")
    }, err=> reject(err))
  })
 }

  forgotPassword(email){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.sendPasswordResetEmail(email)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }

  loginWithPhone(phone, capture){
    return this.afAuth.auth.signInWithPhoneNumber(phone,capture)
  }

}


