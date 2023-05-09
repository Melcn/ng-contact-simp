import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './modules/contact-list/contact-list.component';
import { SelectedContactComponent } from './modules/selected-contact/selected-contact.component';
import { HeaderComponent } from './modules/header/header.component';
import { ContactService } from './contact.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    SelectedContactComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})

export class AppModule { }
