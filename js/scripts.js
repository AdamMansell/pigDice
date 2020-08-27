function Game(player1Score, player2Score, isPlayer1Turn, isPlayer2Turn) {
  this.player1Score = player1Score;
  this.player2Score = player2Score;
  this.isPlayer1Turn = isPlayer1Turn;
  this.isPlayer2Turn = isPlayer2Turn;
}

function Hold(playerScoreOnHold) {
  this.playerScoreOnHold = playerScoreOnHold;
}


Game.prototype.isWinner = function (playerScore) {
  if (playerScore >= 50) {
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
  let p1ScoreOnHold = new Hold(0);
  let p2ScoreOnHold = new Hold(0);
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
        currentGame.player1Score = p1ScoreOnHold.playerScoreOnHold;
        $("#p1-score").text(currentGame.player1Score);
        colorSwitch();
      } else if (currentGame.isPlayer2Turn) {
        currentGame.player2Score = p2ScoreOnHold.playerScoreOnHold;
        $("#p2-score").text(currentGame.player2Score);
        colorSwitch();
      }
      currentGame.isPlayer1Turn = !currentGame.isPlayer1Turn;
      currentGame.isPlayer2Turn = !currentGame.isPlayer2Turn;
    } else if (currentGame.isPlayer1Turn) {
      currentGame.player1Score += randomNumber; // logic
      currentGame.isWinner(currentGame.player1Score) ? $("#win1").show() : $("#win1").hide();
      $("#p1-score").text(currentGame.player1Score) // ui
    } else if (currentGame.isPlayer2Turn) {
      currentGame.player2Score += randomNumber;
      currentGame.isWinner(currentGame.player2Score) ? $("#win2").show() : $("#win2").hide();
      $("#p2-score").text(currentGame.player2Score)
    }
    $("#number").text(randomNumber);
  });
  $("#button-hold").click(function (event) {
    event.preventDefault();
    let snd = new Audio("snd/click-sound.wav");
    snd.currentTime = 0;
    snd.play();
    currentGame.isPlayer1Turn ? p1ScoreOnHold.playerScoreOnHold = currentGame.player1Score : p2ScoreOnHold.playerScoreOnHold = currentGame.player2Score;
    currentGame.isPlayer1Turn = !currentGame.isPlayer1Turn;
    currentGame.isPlayer2Turn = !currentGame.isPlayer2Turn;

    colorSwitch();
  })
});