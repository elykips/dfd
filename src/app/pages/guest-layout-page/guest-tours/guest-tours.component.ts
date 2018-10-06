import { Component, OnInit } from '@angular/core';
import { GuestsService } from '../../../core/services/guests/guests.service';
import { confirmText } from '../../../shared/data/sweet-alerts';

@Component({
  selector: 'app-guest-tours',
  templateUrl: './guest-tours.component.html',
  styleUrls: ['./guest-tours.component.scss']
})
export class GuestToursComponent implements OnInit {

  guestTours:any[]

  constructor(
    private guestsService: GuestsService) {     
     }

  ngOnInit() {
    this.guestsService.fetchGuestTours().subscribe(tours=>{
      this.guestTours = tours
    })

  }




}
