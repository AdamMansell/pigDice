function Game(player1Score, player2Score, isPlayer1Turn, isPlayer2Turn) {
  this.player1Score = player1Score;
  this.player2Score = player2Score;
  this.isPlayer1Turn = isPlayer1Turn;
  this.isPlayer2Turn = isPlayer2Turn;
}

$(document).ready(function () {
  
  let currentGame = new Game(0, 0, true, false);
  // $("#player1Box").addClass("player-turn-true");
  // $("#player2Box").addClass("player-turn-false");
  $("#button-roll").click(function (event) {
    event.preventDefault();
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    
    if (currentGame.isPlayer1Turn) {
      currentGame.player1Score += randomNumber;
      $("#p1-score").text(currentGame.player1Score)
    } else if (currentGame.isPlayer2Turn) {
      currentGame.player2Score += randomNumber;
      $("#p2-score").text(currentGame.player2Score)
    }
    $("#number").text(randomNumber);
  });
  $("#button-hold").click(function(event){
    event.preventDefault();
    currentGame.isPlayer1Turn = !currentGame.isPlayer1Turn;
    currentGame.isPlayer2Turn = !currentGame.isPlayer2Turn;
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
  })
});