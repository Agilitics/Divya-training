import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AttorneysComponent } from './attorneys/attorneys.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"attorneys",component:AttorneysComponent},
  {path:"testimonals",component:TestimonalsComponent},
  {path:"dashboards",component:DashboardsComponent},
  {path:"dashboard",component:DashboardComponent},
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
