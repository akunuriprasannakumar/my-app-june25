import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ClockComponent } from './clock/clock.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';
import { TaskComponent } from './task/task.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from "@angular/common/http";
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentIdcardsComponent } from './student-idcards/student-idcards.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateIdcardComponent } from './create-idcard/create-idcard.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmailComponent } from './email/email.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    PageNotFoundComponent,
    CalculatorComponent,
    ClockComponent,
    DataBindingComponent,
    DirectivesComponent,
    EmployeesComponent,
    TaskComponent,
    VehiclesComponent,
    CreateVehicleComponent,
    CreateStudentComponent,
    StudentIdcardsComponent,
    VehicleDetailsComponent,
    CreateIdcardComponent,
    RegistrationComponent,
    EmailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
