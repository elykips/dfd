import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  allTours
  respectiveProfiles
  constructor(
    private afs: AngularFirestore) { }

  fetchGuestTours(){
    return this.afs.collection("myTours").valueChanges()
     
  }

  

}
