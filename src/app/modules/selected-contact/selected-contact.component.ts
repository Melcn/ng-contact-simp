import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelContact } from 'src/app/model-contact/contact.model';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-selected-contact',
  templateUrl: './selected-contact.component.html',
  styleUrls: ['./selected-contact.component.css']
})
export class SelectedContactComponent implements OnInit{

  @Input() contact! : ModelContact;
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
      /*
    this.contact = this.contactService.getContacts(); 
    const contactId: string|null = this.route.snapshot.paramMap.get('id');

   
    if(contactId) {
      this.contact = this.contactService.getContacts((contact: { id: string }) => contact.id === contactId); 
    }*/
  }
  
  goToContact(contact: ModelContact){
    this.router.navigate(['/selectedContact', contact.id]);
    
  }
}
