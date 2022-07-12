import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'TiTac Toe Game';
  player1 = 'John';
  player2 = 'ABC';
  player1Marx = 'X';
  player2Mark = 'O';
  currentPlayer = this.player1;
  gameBoard = [
    ['0', '0', '0'],
    ['0', '0', '0'],
    ['0', '0', '0'],
  ];

  userChoice(i, j) {
    let currentEntry = this.gameBoard[i][j];
    const mark =
      this.currentPlayer === this.player1 ? this.player1Marx : this.player2Mark;
    if (currentEntry == '0') {
      this.gameBoard[i][j] = mark;
    }
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  checkWinner(row, col) {
    for (let i = 0; i < this.gameBoard.length; i++) {}
  }
}

// get the current row, iterate the row for the winner (common mark)
// check for the winner for vertically, using the column.
//
