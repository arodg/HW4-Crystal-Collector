// 1. Set initial variables
// 2. Number functions for Random Number and crystals
// 3. Assign crystal values to each crystal
// 4. HTML
// 5. On click events for crystals



$(document).ready(function() {
	
// Initial variables
var totalPoints = 0;
var randomNumber  = randomNumber();
var wins = 0;
var losses = 0;
var blue = crystalValue();
var red = crystalValue();
var green = crystalValue();
var purple = crystalValue();

// Random number 19-120, ((max-min) + min) = ((120-19) + 19)
function randomNumber() {
    return Math.floor(Math.random() * 101) + 19;
}

// Random crystal value 1-12
function crystalValue() {
  	return Math.floor(Math.random() * 11) + 1;
 }

// HTML
$("#randomNumber").text(randomNumber);
$("#wins").append(wins);
$("#losses").append(losses);
$("#totalPoints").text(totalPoints);


// Click events for crystal buttons, add to total points
$("#blue").on("click", function() {
    totalPoints = Number(totalPoints) + Number(blue);
    $("#totalPoints").text(totalPoints);       
});

$("#red").on("click", function() {
    totalPoints = Number(totalPoints) + Number(red);
    $("#totalPoints").text(totalPoints);       
});

$("#green").on("click", function() {
    totalPoints = Number(totalPoints) + Number(green);
    $("#totalPoints").text(totalPoints);       
});

$("#purple").on("click", function() {
    totalPoints = Number(totalPoints) + Number(purple);
    $("#totalPoints").text(totalPoints);       
});

// Check to see if numbers match
if (totalPoints === randomNumber) {
      wins+=1;
      alert("You win");
}

else if (totalPoints > randomNumber) {
      // Increment losses, restart the game, and update the page.
      losses+=1;
      alert("You lose");
}      
     
});