$(document).ready(function () {
  let randomNumber;
  $("#button-roll").click(function(event) {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    $("#number").text(randomNumber);
    
  });
});