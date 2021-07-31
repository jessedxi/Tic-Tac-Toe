export default class GameDisplay {
  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
          <div class="gameHeader">
              <div class="gameHeader__turn"> Blue Turn</div>
              <div class="gameHeader__gameStatus"> In Progress...</div>
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
      `;
  }
}
