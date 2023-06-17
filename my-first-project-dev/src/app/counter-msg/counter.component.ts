import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-msg',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterMsgComponent {
  like: number = 0;
  disLike: number = 0;

  increment() {
    // console.log('Adding...');
    this.like++;
  }

  decrement() {
    // console.log('Adding...');
    this.disLike++;
  }
}
