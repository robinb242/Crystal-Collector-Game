


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



