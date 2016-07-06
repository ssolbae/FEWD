var link = document.querySelector(".like-link");
var form = document.querySelector("#new-comment");

link.addEventListener("click", like);
form.addEventListener("submit", comment);

var like = document.querySelector(".like-count");

function like(event) {
  event.preventDefault();

  like.textContent += 1
  // Your code for like goes here
}

function comment(event) {
  event.preventDefault();

  // Your code for comments goes here
}
