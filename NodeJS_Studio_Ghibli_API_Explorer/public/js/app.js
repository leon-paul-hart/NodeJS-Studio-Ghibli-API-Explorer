var app = function () {

    var filmList = new FilmList("https://ghibliapi.herokuapp.com/films");
    var filmListView = new FilmListView(document.querySelector("#films"));

    filmList.getData((films) => {
        filmListView.render(films);
    });

}

window.onload = app;