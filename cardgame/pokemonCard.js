var gameIntro = document.querySelector(".gameIntro");
var gameHow = document.querySelector(".gameHow");
var gameBox = document.querySelector(".gameBox");
var gameOver = document.querySelector(".gameOver");

var startButton = document.querySelector(".startButton");
var howButton = document.querySelector(".howButton");
var homeButton = document.querySelector(".homeButton");
var cardFaceDown = document.querySelector(".card-face-down");
var theImages = [];
var selectedImages = [];
var firstCard;
var secondCard;
var numberOfCards = 4;

for (i = 1; i <= 721; i++) {
  theImages.push("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png")
}

startButton.addEventListener("click", startGame);
howButton.addEventListener("click", describeGame);
homeButton.addEventListener("click", backToHome);

function backToHome() {
  gameHow.classList.add("hidden");
  gameIntro.classList.remove("hidden");
}
function describeGame() {
  gameIntro.classList.add("hidden");
  gameHow.classList.remove("hidden");

}

function startGame() {
  gameIntro.classList.add("hidden");
  gameBox.classList.remove("hidden")
  deal();
}

  function deal() {
    selectedImages = [];

    for (var i = 0; i < numberOfCards / 2; i++) {
      selectedImages.push(theImages[Math.floor(Math.random() * theImages.length)]);
    }
    // Double the array and shuffle it
    selectedImages = shuffle(selectedImages.concat(selectedImages));

    selectedImages.forEach(function(selectedCard) {
      console.log(selectedCard);
      var card = document.createElement("div");
      card.classList.remove("card-face-down");
      card.classList.add("card-face-up");
      card.classList.add("card");
      card.classList.add("col-sm-3");
      card.style.backgroundImage = "url('" + selectedCard + "')";
      card.addEventListener("click", flip);
      gameBox.appendChild(card);
    });

    // var cards = document.getElementsByClassName("card");
    //
    // Array.prototype.forEach.call(cards, function(card, i) {
    //     card.classList.remove("card-face-down");
    //     card.classList.add("card-face-up");
    //     card.style.backgroundImage = "url('" + selectedImages[i] + "')";
    //     card.addEventListener("click", flip);
    // });
    setTimeout(magic, 3000);
  }

function flip(event) {
  if (firstCard) {
    // Second card...
    secondCard = this;
    secondCard.classList.remove("card-face-down");
    secondCard.classList.add("card-face-up");
    if (firstCard.style.backgroundImage == secondCard.style.backgroundImage) {
      firstCard = null;
      secondCard = null;
      if (!document.querySelector(".card-face-down")) {
        if (numberOfCards == 16) {
          gameBox.classList.add("hidden");
          gameOver.classList.remove("hidden");
        } else {
          gameBox.classList.add("hidden");
          gameBox.textContent = "";
          numberOfCards = numberOfCards * 2;
          startGame();
        }
      }
    } else {
      setTimeout(dismatch, 200);
    }
  } else {
    // First card...
    firstCard = this;
    firstCard.classList.remove("card-face-down");
    firstCard.classList.add("card-face-up");
  }
}

function dismatch() {
  firstCard.classList.toggle("card-face-down");
  firstCard.classList.toggle("card-face-up");
  secondCard.classList.toggle("card-face-down");
  secondCard.classList.toggle("card-face-up");

  firstCard = null;
  secondCard = null;
}

function magic() {
  var cards = document.getElementsByClassName("card");
  Array.prototype.forEach.call(cards, function (elem) {
      elem.classList.remove("card-face-up");
      elem.classList.add("card-face-down");
  });
}

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
