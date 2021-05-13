class FilmList {

  constructor(url) {
    this.url = url;
    this.filmList = [];
    this.onUpdate = null;
  }

  getData(callback) {
    var request = new XMLHttpRequest(); // Represents an XML request using HTTP.

    request.open("GET", this.url); // Requests a synchronous or asynchronous file download from a specific URL.

    request.onload = function () {
      if (request.status === 200) { // if HTTP request is successfull...
        var jsonString = request.responseText; // put the requested responseText into the jsonString variable
        this.filmList = JSON.parse(jsonString); // Parse the recieved JSON string and set it as the variable array-like object "this.filmList"
        callback(this.filmList);
      }
    }.bind(this); // binds "this" of the inner function to the outer scope of FilmList.
    
    request.send(); // sends the HTTP request.
  }

}
