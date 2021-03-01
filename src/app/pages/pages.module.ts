import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [HomeComponent, ProyectsComponent, AboutComponent, ContactComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HomeComponent]
})
export class PagesModule { }
