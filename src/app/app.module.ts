import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './modules/contact-list/contact-list.component';
import { SelectedContactComponent } from './modules/selected-contact/selected-contact.component';
import { HeaderComponent } from './modules/header/header.component';
import { ContactService } from './contact.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    SelectedContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})

export class AppModule { }
