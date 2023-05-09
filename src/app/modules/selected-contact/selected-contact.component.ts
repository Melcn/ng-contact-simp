import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { ModelContact } from 'src/app/model-contact/contact.model';

@Component({
  selector: 'app-selected-contact',
  templateUrl: './selected-contact.component.html',
  styleUrls: ['./selected-contact.component.css']
})
export class SelectedContactComponent implements OnInit{

  contacts! : ModelContact[];
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    
    this.contacts  = this.contactService.getContacts();
  }
  
  goToContact(contact: ModelContact){
    
    for(let i = 0; i < this.contacts.length; i++){

      if(contact.id == this.contacts[i].id){
        return contact;
      }
    }
    
  }
}
