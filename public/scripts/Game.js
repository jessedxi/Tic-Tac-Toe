export default class Game {
  constructor() {
    this.turn = "Blue";
    this.grid = new Array(9).fill(null);
    this.possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  toggleTurn() {
    this.turn = this.turn === "Blue" ? "Yellow" : "Blue";
  }

  placeColor(index) {
    if (this.board[index]) {
      return;
    }

    this.grid[index] = this.turn;
    this.toggleTurn();
  }

  checkForWin() {
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const win of possibleWins) {
      const [index1, index2, index3] = win;

      if (
        this.grid[index1] &&
        this.grid[index1] === this.grid[index2] &&
        this.grid[index1] === this.grid[index3]
      ) {
        return win;
      }
    }

    return null;
  }

  checkWin() {
    let combinations = this.grid.reduce(
      (acc, color, square) => (
        color === this.turn ? acc.concat(square) : acc, []
      )
    );
    let gameWon = null;
    for (let [index, win] of this.possibleWins.entries()) {
      if (win.every((element) => combinations.idexOf(element > -1))) {
        gameWon = { index: index, player: this.turn };
        break;
      }
    }
    return gameWon;
  }

  finished() {
    return this.checkForWin() && !this.grid.includes(null);
  }
}
