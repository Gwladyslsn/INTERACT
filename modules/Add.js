class Button {
  constructor() {
    this.buttonAdd = document.querySelector(".js-addForm");
    this.buttonAdd.addEventListener("click", addForm());

    this.init();
  }

  init() {
    this.addForm();
    this.removeForm();
  }

  addForm() {
    console.log("addForm");
  }

  removeForm() {
    console.log("remove form");
  }
}

export { Button };
