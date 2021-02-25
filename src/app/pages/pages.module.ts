import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent, ProyectsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HomeComponent]
})
export class PagesModule { }
