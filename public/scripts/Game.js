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
    this.playableTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }

  toggleTurn() {
    this.turn = this.turn === "Blue" ? "Yellow" : "Blue";
  }

  placeColor(index) {
    if (!this.unResolved()) {
      return;
    }

    if (this.grid[index]) {
      window.alert("Error, tile already played!");
      return;
    }

    this.grid[index] = this.turn;
    if (!this.checkForWin()) {
      this.toggleTurn();
    }
  }

  checkForWin() {
    for (const win of this.possibleWins) {
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

  unResolved() {
    return !this.checkForWin() && this.grid.includes(null);
  }
}
