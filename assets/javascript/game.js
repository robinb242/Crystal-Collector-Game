


//GLOBAL VARIABLES
//********************************************************************

var crystal = {
	diamond:
	{
		name:"Diamond",
		value: 0
	},
	amethyst:
	{
		name:"amethyst",
		value: 0
	},
	blueGlass:
	{
		name:"Blue Glass",
		value: 0
	},
	rockCrystal:
	{
		name:"Rock Crystal",
		value: 0
	}

}

//setting the number-to-guess ID in HTML to targetNumber value from JS
 

//declaring the game progress variables
  var targetNumber = 0;
  var userTotal = 0;
  var wins = 0 
  var losses = 0
$("#numberWins").text(wins);
$("#numberlosses").text(losses);
//Scores

//FUNCTIONS
//************************************************************************
var getRandom = function(min,max) {
	return Math.floor(Math.random() * (max-min + 1) + min);
}
 
var startGame = function() {

		//rest the current score
	userTotal = 0;

	//set a new target number
	targetNumber = getRandom(19, 120);

	// set values for the crystals
	crystal.diamond.value = getRandom(1,12);
	crystal.blueGlass.value = getRandom(1,12);
	crystal.amethyst.value = getRandom(1,12);
	crystal.rockCrystal.value = getRandom(1,12);

$("#userTotal").html(userTotal);
$("#targetNumber").html(targetNumber);

console.log("---------------------------------------")
console.log("Target Score: " + targetNumber);
console.log("Diamond: " + crystal.diamond.value + " | Blue Glass: " + crystal.blueGlass.value +
"| Amethyst: " + crystal.amethyst.value +  "| Rock Crystal: " + crystal.rockCrystal.value);
console.log("_________________________________________")

} 
//Respond to clicks by adding to userTotal.
var addValues = function(crystal) {

	userTotal = userTotal + crystal.value;
	$("#userTotal").html(userTotal);

	//Call the checkWin function
	checkWin();

	 console.log("Your score: " + userTotal);
}

// Check if user won or lost the game.
var checkWin = function() {

if(userTotal > targetNumber) {
	alert("You Lost");
	console.log("You Lost");
	losses++;

	$("#losses").html(losses);
	
	startGame();
	}

else if (userTotal == targetNumber) {
	alert("You Won!");
	console.log("You Won!");
	wins++;

	$("#wins").html(wins);

	startGame();

	}
}

//MAIN PROCESSES (call upon the functions to make something happen)
//*************************************************************************
//Starts the game for the first time
startGame();
$("#diamond").click(function() {
	addValues(crystal.diamond);
});

$("#blueGlass").click(function() {
	addValues(crystal.blueGlass);
});

$("#amethyst").click(function() {
	addValues(crystal.amethyst);
});

$("#rockCrystal").click(function() {
	addValues(crystal.rockCrystal);
});



/* Old Javascript
*********************************************************************

$(document).ready(function() {


//GLOBAL VARIABLES
//********************************************************************
var targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);

//setting the number-to-guess ID in HTML to targetNumber value from JS
  $("#number-to-guess").text(targetNumber);

//declaring the game progress variables
  var userTotal = 0;
  var wins = 0 
  var losses = 0
$("#numberWins").text(wins);
$("#numberlosses").text(losses);

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  //create variables to hold random values for the crystals
  var crystal1 = Math.floor(Math.random() * 12) + 1;
  var crystal2 = Math.floor(Math.random () * 12) +1;
  var cryatal3 = Math.floor(Math.random () * 12) +1;
  var crystal4 = Math.floor(Math.random () * 12) +1;
//FUNCTIONS
//************************************************************************

function reset() {
	targetNumber=Math.floor(Math.random() * ((120-19)+1) + 19);
	console.log(targetNumber);
	$("#number-to-guess").text(targetNumber);
	 crystal1 = Math.floor(Math.random() * 12) + 1;
	 crystal2 = Math.floor(Math.random () * 12) +1;
	 cryatal3 = Math.floor(Math.random () * 12) +1;
	 crystal4 = Math.floor(Math.random () * 12) +1;
	 userTotal = 0;
	 $("#userTotal").text(userTotal);
	}



}
//need four images with their own IDs to act as containers to hold 
//the hidden numbers.



//random number generator for randomTargetNumber, and each randomHiddenNumber

//Onclick event to add  userGuess to guessesTotal

//Add the selected crystal value to the total.

//Win/Loose for loop

//win event, what happens when you hit the target number.

//Loose event, what happens when you go evr the total



//MAIN PROCESSES (call upon the functions to make something happen)
//*************************************************************************

//Ends document reeady function
});
*/
