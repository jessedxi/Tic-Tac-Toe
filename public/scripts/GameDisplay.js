export default class GameDisplay {
  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
        <div class="gameHeader">
          <div class="gameHeader__turnDisplay"
            Blue's Turn!
          </div>
          <div class="gameHeader__gameStatus">
            Game in progress...
          </div>
          <button type="button" class="gameHeader__gameReset">
            Restart
          </button>
        </div>
    `;
  }
}
