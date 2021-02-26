import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"proyects", component:ProyectsComponent
  },
  {
    path:"about", component:AboutComponent
  },
  {
    path:"contact", component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
