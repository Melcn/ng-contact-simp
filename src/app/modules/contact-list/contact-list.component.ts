import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';
import { ModelContact } from 'src/app/model-contact/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit{

  contacts! : ModelContact[];
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    
    this.contacts  = this.contactService.CONTACTS;
    
  }


  
}
