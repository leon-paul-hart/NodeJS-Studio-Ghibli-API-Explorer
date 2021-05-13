class FilmListView {

  constructor(selectElement) {
    this.selectElement = selectElement;
  }

  render(films) {
    films.forEach(this.createOption.bind(this));
  }

  createOption(films) {
    var optionElement = document.createElement("option");
    optionElement.text = films.title;
    this.selectElement.appendChild(optionElement);
  }
  
}


