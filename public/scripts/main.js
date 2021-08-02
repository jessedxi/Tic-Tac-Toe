import Game from "./Game.js";
import GameDisplay from "./GameDisplay.js";

let game = new Game();
let gameDisplay = new GameDisplay(document.getElementById("app"));

gameDisplay.onTileClick = (index) => {
  game.placeColor(index);
  gameDisplay.update(game);
};

gameDisplay.onRestart = () => {
  game = new Game();
  gameDisplay.update(game);
};

gameDisplay.update(game);
