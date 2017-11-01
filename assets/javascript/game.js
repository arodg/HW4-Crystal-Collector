// 1. Set initial variables
// 2. Number functions for Random Number and crystals
// 3. Function to start game
// 4. Check if numbers match to determine wins and losses
// 5. On click events for crystals
// 6. 


$(document).ready(function() {
	
// Initial variables that reset each game
var totalPoints = 0;
var randomNum = randomNumber();
var blue = crystalValue();
var red = crystalValue();
var green = crystalValue();
var purple = crystalValue();
$("#totalPoints").text(totalPoints);
$("#randomNumber").text(randomNum);

// Wins,losses (will not reset to 0)
var wins = 0;
var losses = 0;
$("#wins").text(wins);
$("#losses").text(losses);

// Random number 19-120, ((max-min) + min) = ((120-19) + 19)
function randomNumber() {
    return Math.floor(Math.random() * 101) + 19;
}

// Random crystal value 1-12
function crystalValue() {
  	return Math.floor(Math.random() * 11) + 1;
}

// New game, reset all variables except wins and losses
function newGame() {
    totalPoints = 0;
    randomNum = randomNumber();
    blue = crystalValue();
	  red = crystalValue();
	  green = crystalValue();
	  purple = crystalValue();
    $("#randomNumber").text(randomNum);
	  $("#totalPoints").text(totalPoints);
 } 
    
// Check if Total Score matches Random Number
function checkMatch () {
	$("#winMessage").text("Wins:");
  $("#loseMessage").text("Losses:");
  
  if (totalPoints === randomNum) {
      wins+=1;
      $("#wins").text(wins);
      $("#winMessage").text("You win!! Play again?");
      newGame();
	}
	
	if (totalPoints > randomNum) {
      losses+=1;
      $("#losses").text(losses);
      $("#loseMessage").text("Too high! Play again?");
      newGame();
	}  
}

// Click events for crystal buttons, add to total points
$("#blue").on("click", function() {
    totalPoints = Number(totalPoints) + Number(blue);
    $("#totalPoints").text(totalPoints); 
    checkMatch();      
});

$("#red").on("click", function() {
    totalPoints = Number(totalPoints) + Number(red);
    $("#totalPoints").text(totalPoints); 
    checkMatch();      
});

$("#green").on("click", function() {
    totalPoints = Number(totalPoints) + Number(green);
    $("#totalPoints").text(totalPoints); 
    checkMatch();      
});

$("#purple").on("click", function() {
    totalPoints = Number(totalPoints) + Number(purple);
    $("#totalPoints").text(totalPoints);
    checkMatch();       
});




})