import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DisplayComponent } from './display/display.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'employs', component: EmployeeListComponent },
  { path: 'addemployee', component: AddemployeeComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent }, 
  { path: 'update-employ/:id', component: UpdateemployeeComponent }, 
  { path: 'employ-details/:id', component: EmployeedetailsComponent },
  { path: 'display', component: DisplayComponent ,
    children :[
      {path: 'create-employ' ,component:CreateEmployeeComponent},
      { path: 'update-employ/:id', component: UpdateemployeeComponent },
      { path: 'employ-details/:id', component: EmployeedetailsComponent },
      { path: 'employs', component: EmployeeListComponent },
    ]
  },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
