export default class Game {
  constructor() {
    this.turn = "Blue";
    this.grid = new Array(9).fill(null);
  }

  toggleTurn() {
    this.turn = this.turn === "Blue" ? "Yellow" : "Blue";
  }

  placeColor(index) {
    this.grid[index] = this.turn;
    this.toggleTurn();
  }
}
