import { Component } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {
  constructor() {
  }

  choice: string = '';
  res: string | null = null;
  txt: string | null = null;

  flipCoin() {
    const random = Math.random();
    this.res = random < 0.5 ? 'Орел' : 'Решка';

    if (this.choice === this.res) {
      this.txt = 'Вы выиграли!';
    } else {
      this.txt = 'Вы проиграли!';
    }
  }
}

