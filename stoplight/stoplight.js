var buttonStop = document.querySelector(".buttonStop");
var buttonSlow = document.querySelector(".buttonSlow");
var buttonGo = document.querySelector(".buttonGo");
var buttonCaution = document.querySelector(".buttonCaution");

buttonStop.addEventListener("click", turnRed);
buttonSlow.addEventListener("click", turnYellow);
buttonGo.addEventListener("click", turnGreen);
buttonCaution.addEventListener("click", flickerYellow);

var red = document.querySelector(".circlesStop");
var yellow = document.querySelector(".circlesSlow");
var green = document.querySelector(".circlesGo");

function turnRed() {
  red.classList.toggle("Stop");
  green.classList.remove("Go");
  yellow.classList.remove("Slow");
  clearInterval(intervalMagic);
}
function turnYellow() {
  yellow.classList.toggle("Slow");
  red.classList.remove("Stop");
  green.classList.remove("Go");
  clearInterval(intervalMagic);
}
function turnGreen() {
  green.classList.toggle("Go");
  red.classList.remove("Stop");
  yellow.classList.remove("Slow");
  clearInterval(intervalMagic);
}
function magic() {
  yellow.classList.toggle("Slow");
  red.classList.remove("Stop");
  green.classList.remove("Go");
}
function flickerYellow() {
   intervalMagic = setInterval(magic, 1000);
}
