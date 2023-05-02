import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SelectedContactComponent } from './selected-contact/selected-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    SelectedContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
