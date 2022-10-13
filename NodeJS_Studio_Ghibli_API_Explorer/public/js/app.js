const app = function () {
  const filmList = new FilmList('https://ghibliapi.herokuapp.com/films');
  const filmListView = new FilmListView(document.querySelector('#films'));

  filmList.getData((films) => {
    filmListView.render(films);
  });
};

window.onload = app;
