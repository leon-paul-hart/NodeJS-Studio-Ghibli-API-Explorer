var app = function () {

  var filmList = new FilmList("https://ghibliapi.herokuapp.com/films");
  var filmListView = new FilmListView(document.querySelector("#films"));
  var filmDetailsView = new FilmDetailsView(document.querySelector("#film-details"))

  filmList.getData((films) => {
    filmListView.render(films);
    filmListView.selectElement.addEventListener("change", function () {
      var foundFilm = films[this.value];
      filmDetailsView.renvder(foundFilm);
    });
  });

}

window.onload = app;