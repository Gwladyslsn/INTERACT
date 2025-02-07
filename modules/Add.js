import { Game } from "./Scene.js";

class Button {
  constructor() {
    this.buttonAdd = document.querySelector(".js-addForm");
    this.proposalShape = document.querySelector(".js-proposal").hidden = true;

    this.init();
  }

  init() {
    this.newShape();
  }

  newShape() {
    this.buttonAdd.addEventListener("click", () => {
      this.proposalShape = document.querySelector(
        ".js-proposal"
      ).hidden = false;
    });
  }
}

export { Button };
