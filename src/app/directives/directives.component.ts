import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  states:string[]=['Andhra Pradesh','Telangana','Kerala','Karnataka','Tamil Nadu'];
  countries:string[]=['India','Australia','England','NewZealand'];

  products:any[]=[
    {productName:'TV',price:15000,rating:'2.3'},
    {productName:'AC',price:45000,rating:'4.3'},
    {productName:'washing Machine',price:40000,rating:'4.3'},
    {productName:'Bike',price:75000,rating:'3.3'},
    {productName:'Cycle',price:5000,rating:'3.8'},
    {productName:'Laptop',price:33000,rating:'3.9'},
  ]
  date:any=new Date();
}
