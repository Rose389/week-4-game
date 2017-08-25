$(document).ready(function() {

/*beginning
  game set  up
    create variable or tracking data:
   score, wins, losses, highestScore, targetScore, 4 gem values
*/
    var targetScore
    var playerRecord = {
          wins: "",
          losses: "", 
          current: "",
          highest: "",
        }

    // 4 gem values
    // Set the four values of the crystal buttons. each has a randome number between 1 and 12
    /*var firstCrystal = getCrystalValue();
    var secondCrystal = getCrystalValue();
    var thirdCrystal = getCrystalValue();
    var fourthCrystal = getCrystalValue();*/

    var crystals = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0
    };


$("#highScore").html("HIGH SCORE \n <hr>" + playerRecord.highest);

$("#startGame").on("click", function() {

    getTargetScore();

    getCrystalValue();


    // Insert the number of crystals to be collected into the #targetScore empty <div>
    $("#targetScore").html("Collect " + targetScore + " Crystals");

});

// Target Score
// Set the number of crystals to be collected; random number between 19 and 120
function getTargetScore() {
  targetScore = Math.floor(Math.random()*(120-19+1)+19);
};

function getCrystalValue() {
        crystals.first = $('#1').val(Math.floor(Math.random()*(12)+1));
        crystals.second =  $('#2').val(Math.floor(Math.random()*(12)+1));
        crystals.third =  $('#3').val(Math.floor(Math.random()*(12)+1));
        crystals.fourth =  $('#4').val(Math.floor(Math.random()*(12)+1));
};

/* 
* CRYSTALBUTTON FUNCTIONALITY
* When the player clicks on a crystal, 
  it will add a specific amount of points to the player's total score. 
* Your game will hide this amount until the player clicks a crystal.
* When they do click one, update the player's score counter.
*/

var update = $('#currentScore').html('Your current total is: ' + playerRecord.current);

$("#crystal-1").on("click", function(updateScore){

});

$("#crystal-2").on("click", function(updateScore){

});

$("#crystal-3").on("click", function(updateScore){
    return $("#3").html(function(i, origVal){
            return "Old score: " + origVal + " New score:  (index: " + i + ")"; 
        });
});

$("#crystal-4").on("click", function(updateScore){

});


function updateScore() {

    // get crystal value
      crystals.this ;

    // get current score
      var a = playerRecord.current;

    // add crystal value to current score
      a = a + crystals.this;
};

function checkScore() {
    // check score with targetScore
    // get target score
    // get current score

      if (playerRecord.current === targetScore) {
        playerRecord.wins = playerRecord.wins + 1;
        $("#result").html("Winner!!");
      } else if (playerRecord.current > targetScore) {
        playerRecord.losses = playerRecord.losses + 1;
        $("#result").html("Too bad :-( \n Try Again!");
      }
};


});


/*


end - game over
  either player wins or player losses
  get highest score var
  reset game - score, target, gem values

*/

    




/* add points to currentGameScore */




/* 
* WINS AND LOSSES 
* The player wins if their total score matches the random number from the beginning of the game.
* The player loses if their score goes above the random number.
*/
       

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
      $(".Crystals").on("click", function() {

        // Create a string which will hold the currentScore
        currentScore = "";

        // Then initiate a loop to generate 9 separate numbers
        for (var i = 0; i < targetScore; i + crystalValue) {

          // For each iteration, add the clicked crystalValue to the score
          var random = Math.floor(Math.random() * 9) + 1;

          // Take this number and then add it to the rest of the string.
          // In essence, we are iteratively building a string of numbers. (e.g. First: 1, Second: 13, Third: 135, etc.)
          lottoNumber = random + lottoNumber;

        }

        // Once we have our final lotto number, we'll prepend it to the top of our random-number div.
        $("#random-number").prepend("<br><hr>" + lottoNumber);
      });

*/
/* begin game - on button click */


/* begin game - on button click */

