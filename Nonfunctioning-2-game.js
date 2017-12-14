alert("test");


//GLOBAL VARIABLES
//********************************************************************

var crystal * {
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
	blue-glass:
	{
		name:"Blue Glass",
		value: 0
	},
	rock-crystal:
	{
		name:"Rock Crystal",
		value: 0
	}

}
var targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);

//setting the number-to-guess ID in HTML to targetNumber value from JS
  $("#number-to-guess").text(targetNumber);

//declaring the game progress variables
  var userTotal = 0;
  var wins = 0 
  var losses = 0
$("#numberWins").text(wins);
$("#numberlosses").text(losses);
//Scores

//FUNCTIONS
//************************************************************************




//MAIN PROCESSES (call upon the functions to make something happen)
//*************************************************************************

$("#diamond").click(function() {
	alert("test");
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