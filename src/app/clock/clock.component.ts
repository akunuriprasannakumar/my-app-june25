import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  user:User={
    name:'prasanna kumar',
    mobile:8106566883,
    email:'akunurikumar05@gmail.com',
    age:29
  }

}
