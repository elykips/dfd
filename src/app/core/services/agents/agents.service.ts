import { Injectable } from '@angular/core';
import { channels } from '../../../shared/data/channels';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  constructor() { }

  getChannels(){
    return channels;
  }
}


