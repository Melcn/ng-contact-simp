import { Injectable } from '@angular/core';
import { ModelContact} from './model-contact/contact.model';

@Injectable({
  providedIn: 'root'
})


export class ContactService {

  contacts: ModelContact[] =  [
    new ModelContact("1", "./assets/images/Franz.jpg", "DUPONT", "JEAN", "0606606060", "JeanDupont@mail.com", false),
    new ModelContact("2", "./assets/images/Franz.jpg", "MARTIN", "MARIE", "0606606060", "MarieMartin@mail.com", true),
    new ModelContact("3", "./assets/images/Franz.jpg", "DURAND", "PIERRE", "0606606060", "Durandp@mail.com", false),
    new ModelContact("4", "./assets/images/Franz.jpg", "LEFEBVRE", "JULIE", "0606606060", "JulieLfv@mail.com", true)

  ];
  

  getContacts(): ModelContact[] {
    return this.contacts;
  }

}