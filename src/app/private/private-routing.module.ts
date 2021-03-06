import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent, CanDeactivateGuard } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '', component: DashboardComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent, canDeactivate: [CanDeactivateGuard] }]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
