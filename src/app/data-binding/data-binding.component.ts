import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
 

  //interpolation
  username:string='Prasanna';
  age:number=29;

  //property binding
  isDataPresent:Boolean=true;

   //event binding
  click(){
    alert('welcome to Angular')
  }

  name(){
    alert('name')
  }

  mobile:string='+91';

  

}
