import { Injectable } from '@angular/core';
import { ModelContact} from './model-contact/contact.model';

@Injectable({
  providedIn: 'root'
})


export class ContactService {

  contacts: ModelContact[] =  [
    new ModelContact(1, "DUPONT", "JEAN", "JeanDupont@mail.com", false),
    new ModelContact(2, "MARTIN", "MARIE", "MarieMartin@mail.com", true),
    new ModelContact(3, "DURAND", "PIERRE", "Durandp@mail.com", false),
    new ModelContact(4, "LEFEBVRE", "JULIE", "JulieLfv@mail.com", true)

  ];
  


  getContacts(): ModelContact[] {
    return this.contacts;
  }



}