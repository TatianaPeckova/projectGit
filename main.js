class View {
  constructor() {
    this.app = document.getElementById("app");
    this.title = this.createElement("h1", "title");
    this.app.append(this.title);
    this.title.textContent = "Github Search Users";
    this.searchLine = this.createElement("div", "serch-line");
    this.app.append(this.searchLine);
    this.searchInput = this.createElement("input", "search-input");
    this.searchCounter = this.createElement("span", "counter");
    this.searchLine.append(this.searchInput);
    this.searchLine.append(this.searchCounter);

    this.main = this.createElement("div", "main");
    this.app.append(this.main);

    this.userWrapper = this.createElement("div", "users-wrapper");
    this.main.append(this.usersWrapper);

    this.usersList = this.createElement("ul", "users");
    this.userWrapper.append(this.usersList);
  }
  createElement(elementTag, elementClass) {
    const element = document.createElement(elementTag);
    if (elementClass) {
      element.classList.add(elementClass);
    }
    return element;
  }
}

class Search {
  constructor(view) {
    this.view = view;
    this.view.searchInput.addEventListener("keyup", function () {
      console.log(1);
    });
  }
}

new Search(new View());
