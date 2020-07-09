import { BoysComponent } from './website/boys/boys.component';
import { HomeComponent } from './website/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'boys', component : BoysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
