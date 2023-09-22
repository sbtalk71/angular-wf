import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter$: Observable<number>;
  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = this.store.select('counter')
  }

  doIncrement() {
    this.store.dispatch(increment())
  }

  doDecrement() {
    this.store.dispatch(decrement())
  }

  doReset() {
    this.store.dispatch(reset())
  }
}
