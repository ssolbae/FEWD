var searchButton = document.querySelector(".searchButton");
var resultSection = document.querySelector("#results");
searchButton.addEventListener("click", listMovies);

function listMovies() {
  event.preventDefault()
  resultSection.textContent = "";
  var input = document.querySelector("#movieSearch-input");
  var url = "http://omdbapi.com/?s=" + input.value;
  get(url, parseIt);
}

function parseIt(data) {
  var accountDeets = JSON.parse(data);
  accountDeets.Search.forEach(displayResults);
}

function displayResults(movie) {
  // var url = "http://www.imdb.com/title/" + movie.imdbID;
  var results = document.querySelector("#results");

  var title = document.createElement("div");
  title.textContent = movie.Title;
  title.setAttribute("class", "titleFont"); // works

  var year = document.createElement("div");
  year.textContent = movie.Year;
  year.setAttribute("class", "yearFont");

  var divider = document.createElement("hr");

  results.appendChild(title);
  results.appendChild(year);
  results.appendChild(divider);

  // add link?...
  // results.textContent = movie.Title;
  // results.textContent = movie.Year;

  // var a = document.createElement('a');
  // var linkText = document.createTextNode(movie.Title);
  // a.appendChild(linkText);
  // a.title = movie.Title;
  // a.href = url;
  // document.body.appendChild(a);
}

// https://gist.github.com/avand/063448ca7d475983e42bd3d331b83d63
function get(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.addEventListener("readystatechange", handleReadyStateChange)

  function handleReadyStateChange() {
    if (request.readyState == 4 && request.status == 200) {
      callback(request.responseText);
    }
  };
  request.send();
}
