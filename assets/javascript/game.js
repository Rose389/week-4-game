$(document).ready(function() {


      $("#startGame").on("click", function() {

        alert("I've been clicked!");
      
});

// Set the number of crystals to be collected; random number between 19 and 120
var matchScore = getMatchScore("");

function getMatchScore() {
  return Math.floor(Math.random()*(120-19+1)+19);
};

// Insert the number of crystals to be collected into the #matchScore empty <div>
$("#matchScore").html("Collect " + matchScore + " Crystals");
      


// Set the four values of the crystal buttons. each has a randome number between 1 and 12
var Crystal_1 = getCrystalValue("");
var Crystal_2 = getCrystalValue("");
var Crystal_3 = getCrystalValue("");
var Crystal_4 = getCrystalValue("");

function getCrystalValue() {
  return Math.floor(Math.random()*(12)+1);
};


/* 
* CRYSTALBUTTON FUNCTIONALITY
* When the player clicks on a crystal, 
  it will add a specific amount of points to the player's total score. 
* Your game will hide this amount until the player clicks a crystal.
* When they do click one, update the player's score counter.
*/


$(".crystalButton").on("click", function(){

    var score = ("");

    $("#currentScore").html("Your current total is:\n" + score);


});
    




/* add points to currentGameScore */




/* 
* WINS AND LOSSES 
* The player wins if their total score matches the random number from the beginning of the game.
* The player loses if their score goes above the random number.
*/
          // If you collect the right number of crystals -- winner
          if (score === matchScore) {
            $("#result").html("Winner!!");

          // but, if you collect too many crystals -- try again
          } else if (score > matchScore) {
            $("#result").html("Too bad :-( \n Try Again!");
          };

/* 
* RESET BUTTON
* The game restarts whenever the player wins or loses
* When the game begins again, the player should see a new random number. 
* Also, all the crystals will have four new hidden values. 
* Of course, the user's score (and score counter) will reset to zero.
* The app should show the number of games the player wins and loses. 
* To that end, do not refresh the page as a means to restart the game.
*/


/* begin game - on button click */
// When random-button is clicked...
/*
      $("#random-button").on("click", function() {

        // Create a string which will hold the lottery number
        var lottoNumber = "";

        // Then initiate a loop to generate 9 separate numbers
        for (var i = 0; i < 9; i++) {

          // For each iteration, generate a new random number between 1 and 9.
          var random = Math.floor(Math.random() * 9) + 1;

          // Take this number and then add it to the rest of the string.
          // In essence, we are iteratively building a string of numbers. (e.g. First: 1, Second: 13, Third: 135, etc.)
          lottoNumber = random + lottoNumber;

        }

        // Once we have our final lotto number, we'll prepend it to the top of our random-number div.
        $("#random-number").prepend("<br><hr>" + lottoNumber);
      });


/* begin game - on button click */


/* begin game - on button click */
});