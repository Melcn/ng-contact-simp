import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedContactComponent } from '../modules/selected-contact/selected-contact.component';
import { ContactListComponent } from '../modules/contact-list/contact-list.component';
import { HeaderComponent } from '../modules/header/header.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [


  {
    path: 'Header',
    component: HeaderComponent
  },

  {
    path: 'ContactList',
    component: ContactListComponent
  },

  {
    path: 'SelectedContact',
    component: SelectedContactComponent
  },

  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingRoutingModule { }
