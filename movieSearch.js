var searchButton = document.querySelector("searchButton");
searchButton.addEventListener("click", listMovies);

function listMovies() {
  var input = document.querySelector("movieSearch");
  var url = "http://omdbapi.com/?s=" + input.value;
  get(url, displayResults);
}

function displayResults(data) {
  var accountDeets = JSON.parse(data);

  li.textContent = accountDeets.Search.forEach(doSomething);
}

function doSomething(movie) {
  console.log(movie.Title)
  var url = "http://www.imdb.com/title/" + movie.imdbID;
  var li = document.createElement("li");
  var theBox = document.querySelector("#movieSearch")

  theList.appendChild(li);

}
