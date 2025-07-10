import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  flipkarts:any[]=[]

  constructor(private _flipkartService:FlipkartService){
    _flipkartService.getflipkart().subscribe(
      (data:any)=>{
        console.log(data);
        this.flipkarts=data;
      },(err:any)=>{
        alert("Internal server error")
      }
    )
  }

}
