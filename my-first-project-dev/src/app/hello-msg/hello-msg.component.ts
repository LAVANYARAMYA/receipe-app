import { Component, Input } from '@angular/core';

// Decorators
@Component({
  selector: 'app-hello-msg',
  templateUrl: './hello-msg.component.html',
  styleUrls: ['./hello-msg.component.css'],
})
export class HelloMsgComponent {
  @Input() name: string = 'Renuga';
}
