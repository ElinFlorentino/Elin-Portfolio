import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"projects", component:ProyectsComponent
  },
  {
    path:"about", component:AboutComponent
  },
  {
    path:"contact", component:ContactComponent
  },
  {
    path:"projects/:id",component:DetailsComponent
  },
  { path: '**', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
