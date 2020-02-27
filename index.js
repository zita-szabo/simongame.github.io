var gameRow = [];
var playerRow = [];
var level = 1;
var buttonColours = ["green", "red", "yellow", "blue"];
var started = false;
$("h1").addClass("glow");


document.querySelector("body").addEventListener("keydown", starting);
function starting() {
  if(!started) {
    gamePattern();
    $("h1").text("Level " + level);
    started = true;
}
};

$(".btn").on("click", playerGame);
function playerGame() {
  $("#" + this.id).fadeOut(50).fadeIn(50);
  var active = this.id;
  makeSound(active);
  playerRow.push(active);
  console.log("player: " + playerRow);
  checkAnswer(playerRow.length-1);
}

function gamePattern() {
  level++;
  playerRow = [];
  var randomNum = Math.round(Math.random()*3);
  var activeButton = buttonColours[randomNum];
  $("#" + activeButton).fadeOut(50).fadeIn(50);
  $("#" + activeButton).addClass("active");
  setTimeout(function () {
    $("#" + activeButton).removeClass("active");
  }, 100);
  gameRow.push(activeButton);
  console.log("game: " + gameRow);
  makeSound(activeButton);
  $("h1").text("Level " + level);
}

function checkAnswer(currentLevel) {
  if(gameRow[currentLevel] === playerRow[currentLevel]) {
    console.log("success");
  if(playerRow.length === gameRow.length) {
    setTimeout(function () {
      gamePattern();
    }, 1000);
  }
    } else {
      console.log("wrong");
                $("h1").text("Game over, bitch");
                setTimeout(function () {
                  $("h1").text("Refresh to start over");
                }, 1000);
                $(".btn").off("click", playerGame);
                $("body").addClass("game-over");
                setTimeout(function () {
                    $("body").removeClass("game-over");
                    }, 100);
                  var wrong = new Audio("sounds/wrong.mp3");
                  wrong.play();

                }
}

function makeSound(colourId) {
  switch (colourId) {
    case "green":
      var green = new Audio("sounds/green.mp3")
      green.play();
      break;
    case "red":
      var red = new Audio("sounds/red.mp3")
      red.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3")
      yellow.play();
      break;
    case "blue":
      var blue = new Audio("sounds/blue.mp3")
      blue.play();
      break;
    default:

  }
}
