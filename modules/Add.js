class Button {
  constructor() {
    this.buttonAdd = document.querySelector(".js-addForm");
    this.buttonAdd.addEventListener("click", this.newProposal);
    this.proposalShape = document.querySelector(".js-proposal").hidden = true;

    this.init();
  }

  init() {
    //this.addForm();
    this.removeForm();
  }

  newProposal() {
    this.proposalShape = document.querySelector(".js-proposal").hidden = false;
  }

  removeForm() {
    console.log("remove form");
  }
}

export { Button };
