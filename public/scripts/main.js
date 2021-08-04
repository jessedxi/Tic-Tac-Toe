import Game from "./Game.js";
import GameDisplay from "./GameDisplay.js";

let game = new Game();
let gameDisplay = new GameDisplay(document.getElementById("app"));

gameDisplay.onTileClick = (index) => {
  if (gameDisplay.random === "on") {
    const random = Math.floor(Math.random() * game.playableTiles.length);
    console.log(random);
    game.placeColor(game.playableTiles[random]);
    game.playableTiles.splice(random, 1);
    gameDisplay.update(game);
  } else {
    game.placeColor(index);
    gameDisplay.update(game);
  }
};

gameDisplay.onRestart = () => {
  game = new Game();
  gameDisplay.update(game);
};

gameDisplay.update(game);
