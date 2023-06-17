import { Component } from '@angular/core';

@Component({
  selector: 'app-color-game',
  templateUrl: './color-game.component.html',
  styleUrls: ['./color-game.component.css'],
})
export class ColorGameComponent {
  clr = 'pink';
  // View -> Model -> View
  // typing(event: any) {
  //   console.log(event.target.value);
  //   this.clr = event.target.value;
  // }
  colors = ['crimson', 'orange', 'orangered'];

  addColor() {
    this.colors.push(this.clr);
    this.clr = '';
  }
}
