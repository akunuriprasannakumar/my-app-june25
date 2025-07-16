import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState } from '../store/store';
import { compileNgModule } from '@angular/compiler';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  counter:Observable<number>;
  constructor(private store:Store<CounterState>){
    this.counter=store.pipe(select('counter'));
    console.log(this.counter);
  }

}
