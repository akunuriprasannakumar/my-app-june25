import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1:number=0;
  num2:number=0;
  result:number=0;
  add(){
    console.log(this.num1,this.num2);
    this.result=this.num1+this.num2
    console.log(this.result);
  }
  Sub(){
    console.log(this.num1,this.num2);
    this.result=this.num1-this.num2
    console.log(this.result);

  }
  Mul(){
    console.log(this.num1,this.num2);
    this.result=this.num1*this.num2
    console.log(this.result);

  }
  Div(){
    console.log(this.num1,this.num2);
    this.result=this.num1/this.num2
    console.log(this.result);

  }
  
}