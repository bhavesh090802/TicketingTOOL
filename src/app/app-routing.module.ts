import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [    
  {path:'', component:LandingPageComponent},
  {path:'user-login', component:UserLoginComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'user-signup', component:UserSignupComponent},
  {path:'admin-signup', component:AdminSignupComponent},
  {path:'user-dashboard', component:UserDashboardComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
