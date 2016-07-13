var link = document.querySelector(".like-link");
var form = document.querySelector("#new-comment");
var like = document.querySelector(".like-count");
var commentArea = document.querySelector("#new-comment-body")

link.addEventListener("click", incLike);
form.addEventListener("submit", comment);

function incLike(event) {
  event.preventDefault();
  // Your code for like goes here
  var number = parseInt(like.textContent);
  like.textContent = number+1;
}

function comment(event) {
  event.preventDefault();
  // Your code for comments goes here
  var newCommentArea = document.createElement("textarea");
  newCommentArea.textContent = commentArea.value;
  var body = document.querySelector("#comments");
  body.appendChild(newCommentArea);
}
