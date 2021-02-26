import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [HomeComponent, ProyectsComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HomeComponent]
})
export class PagesModule { }
