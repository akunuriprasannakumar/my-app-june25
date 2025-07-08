import { Component, OnInit } from '@angular/core';
import {  StudentIdcardsService } from '../student-idcards.service';

@Component({
  selector: 'app-student-idcards',
  templateUrl: './student-idcards.component.html',
  styleUrls: ['./student-idcards.component.css']
})
export class StudentIdcardsComponent {
  students:any[]=[]


  constructor(private _studentIdcardsService:StudentIdcardsService){
    _studentIdcardsService.getstudentidcards().subscribe(
      (data:any)=>{
        console.log(data);
        this.students=data;

      },(err:any)=>{
        alert("Internal server error");

      }
    )
  }
  delete(id:any){
    this._studentIdcardsService.deletestudentidcards(id).subscribe(
      (data:any)=>{
        console.log(data);
        
      },(err:any)=>{
        alert("Internal server error");

      }
    )
  }
  term:string='';
  search(){
  this._studentIdcardsService.getFilteredstudentidcards(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        
      },(err:any)=>{
        alert("Internal server error");

      }
    )
  }
  column:string='';
  order:string=''
  sort(){
    console.log(this.column,this.order);
    this._studentIdcardsService.getSortedstudentIdcards(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.students=data;
        console.log(this.students);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
  items:any='';
   page:any='';
   pagination(){
  console.log(this.items,this.page);
  this._studentIdcardsService.getPaginatedstudentIdcards(this.items,this.page).subscribe(
    (data:any)=>{
      console.log(data);
      this.students=data;
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )

}
}