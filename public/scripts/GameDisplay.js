export default class GameDisplay {
  constructor(root) {
    this.random = "off";
    this.root = root;
    this.root.innerHTML = `
          <div class="gameHeader">
              <div class="gameHeader__turn"></div>
              <div class="gameHeader__gameStatus"></div>
              <button type="button" class="gameHeader__random">
                  RANDOM
              </button>
              <button type="button" class="gameHeader__button">
                  RESTART
              </button>
          </div>
          <div class="gameGrid">
              <div class="gameGrid__tile" data-index="0"></div>
              <div class="gameGrid__tile" data-index="1"></div>
              <div class="gameGrid__tile" data-index="2"></div>
              <div class="gameGrid__tile" data-index="3"></div>
              <div class="gameGrid__tile" data-index="4"></div>
              <div class="gameGrid__tile" data-index="5"></div>
              <div class="gameGrid__tile" data-index="6"></div>
              <div class="gameGrid__tile" data-index="7"></div>
              <div class="gameGrid__tile" data-index="8"></div>
          </div>
          <div class=randomMessage>Random Mode Disabled</div>
      `;

    this.onTileClick = undefined;
    this.onRestart = undefined;

    //handles tile clicks
    this.root.querySelectorAll(".gameGrid__tile").forEach((tile) => {
      tile.addEventListener("click", () => {
        this.onTileClick(tile.dataset.index);
      });
    });

    // handles restart button clicks
    this.root
      .querySelector(".gameHeader__button")
      .addEventListener("click", () => {
        if (this.onRestart) {
          this.onRestart();
          document.getElementById("shareBtn").style.display = "none";
          this.random = "off";
        }
      });

    // handles random button clicks
    this.root
      .querySelector(".gameHeader__random")
      .addEventListener("click", () => {
        if (this.random === "off") {
          this.random = "on";
          this.root.querySelector(".randomMessage").textContent =
            "Random Mode Endabled";
        } else {
          this.random = "off";
          this.root.querySelector(".randomMessage").textContent =
            "Random Mode Disabled";
        }
      });
  }

  update(game) {
    this.updateTurn(game);
    this.updateStatus(game);
    this.updateGrid(game);
  }

  updateStatus(game) {
    let status = "Game Start";

    for (let i = 0; i < game.grid.length; i++) {
      if (game.grid[i] !== null) {
        status = "Game in progres...";
      }
    }

    if (game.checkForWin()) {
      status = `${game.turn} has won!  `;
      document.getElementById("shareBtn").style.display = "flex";
    } else if (!game.unResolved()) {
      status = "Game Draw";
    }

    this.root.querySelector(".gameHeader__gameStatus").textContent = status;
  }

  updateTurn(game) {
    const turn = this.root.querySelector(`.gameHeader__turn`);
    turn.textContent = `${game.turn}'s Turn`;
    turn.style.color = game.turn;
  }

  updateGrid(game) {
    for (let i = 0; i < game.grid.length; i++) {
      const tile = this.root.querySelector(
        `.gameGrid__tile[data-index="${i}"]`
      );

      if (game.grid[i] !== null) {
        tile.style.backgroundColor = `${game.grid[i]}`;
      } else {
        tile.style.backgroundColor = "black";
      }
    }
  }
}
