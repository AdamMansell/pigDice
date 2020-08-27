function Game(player1Score, player2Score, isPlayer1Turn, isPlayer2Turn) {
  this.player1Score = player1Score;
  this.player2Score = player2Score;
  this.isPlayer1Turn = isPlayer1Turn;
  this.isPlayer2Turn = isPlayer2Turn;
}

// let modal = document.getElementById("myModal");
// let span = document.getElementsByClassName("close")[0];

// modal.style.display = "block";

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

Game.prototype.isWinner = function(playerScore){
  if (playerScore >= 50){
    return true
  } else {
    return false
  }
}

// Game.prototype.roll = function() {
//   let randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }





// ---------------- UI --------------------

function colorSwitch() {
  if ($("#player1Box").hasClass("player-turn-true")) {
    $("#player1Box").addClass("player-turn-false");
    $("#player1Box").removeClass("player-turn-true");
  } else if ($("#player1Box").hasClass("player-turn-false")) {
    $("#player1Box").addClass("player-turn-true");
    $("#player1Box").removeClass("player-turn-false");
  }
  if ($("#player2Box").hasClass("player-turn-true")) {
    $("#player2Box").addClass("player-turn-false");
    $("#player2Box").removeClass("player-turn-true");
  } else if ($("#player2Box").hasClass("player-turn-false")) {
    $("#player2Box").addClass("player-turn-true");
    $("#player2Box").removeClass("player-turn-false");
  }
}

$(document).ready(function () {

  let currentGame = new Game(0, 0, true, false);
  // $("#player1Box").addClass("player-turn-true");
  // $("#player2Box").addClass("player-turn-false");
  $("#button-roll").click(function (event) {
    event.preventDefault();
    // let result = currentGame.roll();
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let snd = new Audio("snd/dice-roll.wav");
    snd.currentTime = 0;
    snd.play();
    if (randomNumber === 1) {
      let snd = new Audio("snd/roll-1-sound.wav")
      snd.currentTime = 0;
      snd.play();
      if (currentGame.isPlayer1Turn) {
        currentGame.player1Score = 0;
        $("#p1-score").text(currentGame.player1Score);
        colorSwitch();
      } else if (currentGame.isPlayer2Turn) {
        currentGame.player2Score = 0;
        $("#p2-score").text(currentGame.player2Score);
        colorSwitch();
      }
      currentGame.isPlayer1Turn = !currentGame.isPlayer1Turn;
      currentGame.isPlayer2Turn = !currentGame.isPlayer2Turn;
    } else if (currentGame.isPlayer1Turn) {
      currentGame.player1Score += randomNumber; // logic
      $("#p1-score").text(currentGame.player1Score) // ui
    } else if (currentGame.isPlayer2Turn) {
      currentGame.player2Score += randomNumber;
      $("#p2-score").text(currentGame.player2Score)
    }
    $("#number").text(randomNumber);
  });
  $("#button-hold").click(function (event) {
    event.preventDefault();
    let snd = new Audio("snd/click-sound.wav");
    snd.currentTime = 0;
    snd.play();
    currentGame.isPlayer1Turn = !currentGame.isPlayer1Turn;
    currentGame.isPlayer2Turn = !currentGame.isPlayer2Turn;
    colorSwitch();
  })
});