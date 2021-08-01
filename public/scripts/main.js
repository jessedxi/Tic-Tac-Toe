import Game from "./Game.js";
import GameDisplay from "./GameDisplay.js";

let game = new Game();
let gameDisplay = new GameDisplay(document.getElementById("app"));

gameDisplay.onTileClick = (index) => {
  console.log(index);
};

gameDisplay.onRestart = () => {};
