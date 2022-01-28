import { Component } from '@angular/core';
import { IaService } from './ia.service';
import { ReversiGameEngineService } from './reversi-game-engine.service';
import {
  Board,
  Board_RO,
  C,
  getEmptyBoard,
  L,
  R,
  TileCoords,
  Turn,
} from './ReversiDefinitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public RGS: ReversiGameEngineService, private ia: IaService) {}

  // OK, bien comme ça
  public cToString(c: C): string {
    switch (c) {
      case 'Player1':
        return 'X';
      case 'Player2':
        return 'O';
      default:
        return '';
    }
  }

  // OK, très bien comme ça
  searchplayers(players: Turn): number {
    // number, pas Number
    let nb: number = 0;

    this.RGS.board.forEach((a) =>
      a.forEach((b) => {
        if (b == players) {
          nb++;
        }
      })
    );
    return nb;
  }
  onlickEv(i:number , j:number)
}
