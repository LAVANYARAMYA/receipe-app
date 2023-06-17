import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css'],
})
export class ColorBoxComponent {
  @Input() clr: string = 'orange';
}
