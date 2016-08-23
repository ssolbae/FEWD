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
var flag = true;

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
  flag = true;
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

function isValid(card) {
  if (card.alreadyFlipped == true) {
    return false;
  } else {
    return true;
  }
}

function flip(event) {
  // 1. setting the cards
  // 2. do job (either flip both cards if match else flip back)

  if (flag) {
    return;
  } else {
    // card setting
    if (isValid(this)) {
      if (firstCard == null) {
        firstCard = this;
        firstCard.classList.remove("card-face-down");
        firstCard.classList.add("card-face-up");
      } else {
        secondCard = this;
        secondCard.classList.remove("card-face-down");
        secondCard.classList.add("card-face-up");
      }
    }

    if (firstCard && this != firstCard && !this.alreadyFlipped) {
      if (firstCard.style.backgroundImage == secondCard.style.backgroundImage) {
        // match
        firstCard.alreadyFlipped = true;
        secondCard.alreadyFlipped = true;
        firstCard = null;
        secondCard = null;
        if (!document.querySelector(".card-face-down")) {
          if (numberOfCards == 16) {
            // finished last round
            gameBox.classList.add("hidden");
            gameOver.classList.remove("hidden");
          } else {
            // finished this round, goto next round
            gameBox.classList.add("hidden");
            gameBox.textContent = "";
            numberOfCards = numberOfCards * 2;
            startGame();
          }
        }
      } else {
        // no match
        setTimeout(dismatch, 200);
      }
    }
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

//let all cards face down again
function magic() {
  flag = false;
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
