import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ClockComponent } from './clock/clock.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';
import { TaskComponent } from './task/task.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentIdcardsComponent } from './student-idcards/student-idcards.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateIdcardComponent } from './create-idcard/create-idcard.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';
import { EmailComponent } from './email/email.component';
import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard],children:[
    {path:'clock',component:ClockComponent},
    {path:'home',component:HomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'Data-Binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-student', component:CreateStudentComponent},
    {path:'student-idcards',component:StudentIdcardsComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id', component:CreateVehicleComponent},
    {path:'create-idcard/:id', component:CreateIdcardComponent},
    {path:'email', component:EmailComponent},
    {path:'parent',component:ParentComponent},
    {path:'sibling1',component:Sibling1Component},
    {path:'flipkart',component:FlipkartComponent},
    {path:'weather',component:WeatherComponent}
    
  ]},
  {path:'home',component:HomeComponent},
  {path:'task', component:TaskComponent},
  {path:'**',component:PageNotFoundComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
