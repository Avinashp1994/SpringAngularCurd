import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HlightDirective } from './hlight.directive';
import { ArrangeorderPipe } from './arrangeorder.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DisplayComponent } from './display/display.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
 import { NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployService } from './service/employ.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthguardServiceService } from '../app/service/authguard-service.service';
import { EmployReg } from './employreg';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipesComponent,
    LoginComponent,
    SignupComponent,
    EmployeelistComponent,
    AddemployeeComponent,
    HlightDirective,
    ArrangeorderPipe,
    SortPipe,
    FilterPipe,
    DisplayComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateemployeeComponent,
    EmployeedetailsComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    HttpClientModule
  ],
  providers: [EmployService, AuthguardServiceService,EmployReg],
  bootstrap: [AppComponent]
})
export class AppModule { }
