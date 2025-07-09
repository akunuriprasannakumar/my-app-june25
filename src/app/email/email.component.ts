import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email:any[]=[]
emails: any;


  constructor(private _emailService:EmailService){
    _emailService.getemail().subscribe(
      (data:any)=>{
        console.log(data);
        this.email=data;
      },(err:any)=>{
        alert("Internal server error");
      }
    )
  }

}
