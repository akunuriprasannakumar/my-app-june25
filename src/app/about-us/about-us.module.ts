import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutCompanyComponent } from './about-company/about-company.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    AboutCompanyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
