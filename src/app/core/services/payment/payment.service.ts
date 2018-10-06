import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
// import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  userId: string;
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
  private db: AngularFireDatabase) {

      this.afAuth.authState.subscribe(auth=>{
        if(auth) this.userId = auth.uid
      });
     }

     processPayment(token:any, amount){
       const payment={token, amount}
      return this.db.object(`mabesha/'${this.userId}`).set(payment)
      // return this.afs.collection(`/mabesha/${this.userId}`).push(payment)
     }
}
