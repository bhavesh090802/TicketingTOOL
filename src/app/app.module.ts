import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatCardModule} from '@angular/material/card';
import { UserLoginComponent } from './user-login/user-login.component';
import {MatButtonModule} from '@angular/material/button';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TktAddEditComponent } from './tkt-add-edit/tkt-add-edit.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserSignupComponent,
    AdminSignupComponent,
    AdminDashboardComponent,
    TktAddEditComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
