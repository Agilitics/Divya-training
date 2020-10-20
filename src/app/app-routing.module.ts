import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ContactusComponent } from './component/contactus/contactus.component';


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"contactus",component:ContactusComponent},
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
