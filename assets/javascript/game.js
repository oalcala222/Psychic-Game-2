//full list of all the options the computer can select
var comChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//track the number of user wins
var numOfWins = 0;
//track the number of user losses
var numOfLosses = 0;
//the number of guesses the user has left
var userGuessesLeft = 9;
//an empty array to display the letters the user has guessed already
var userGuessedLetters=[];



document.getElementById("wins").firstChild.nodeValue = "Number of Wins:"+ numOfWins;
// a way for the game restart the game
var restart = function () {
    comGuess = comChoices[Math.floor(Math.random() * comChoices.length)];
    userGuessesLeft = 9;
    userGuessedLetters = [];
    console.log("new game guessed letter is:" + comGuess);
};


//THIS IS WHERE THE GAME BEGINS!!!
window.onload = function () {
    //The computer first selects a random letter
    comGuess = comChoices[Math.floor(Math.random() * comChoices.length)];
    console.log(comGuess);
    //The user then makes a selection that will be compared to the computers
    document.onkeyup = function (event) {
        userGuess = event.key.toLowerCase();
        console.log(userGuess);
        //we also require the users previous guesses to be displayed while the game continues in sequence in an array
        userGuessedLetters.push(userGuess);
        console.log(userGuessedLetters);
        // we then need the guesses to be compared.
        // if the players letter matches the computers letter, true = true, the player wins
        if (userGuess === comGuess) {
            numOfWins++;
            alert('I see you see me!!!');
            alert('Number of wins:' + numOfWins);
            //the game will then restart
            restart();
        }
        // if not (else) the game continues through the number of guesses and records the answer for the user on the screen
        else {
            userGuessesLeft--;
            console.log(userGuessesLeft);
        }
        // if the user uses up all the guesses and does not guess the letter,the game results in a loss
        if (userGuessesLeft === 0) {
            numOfLosses++;
            alert("Go back to your miserable life!!!");
            alert('Number of losses:' + numOfLosses);
            //the game will then restart
            restart();
        }
        //Documenting all of our wins and losses and replacing them in our html......using verbage for mac!!!!!
        document.getElementById("wins").firstChild.nodeValue = "Number of Wins: " + numOfWins;
        document.getElementById("losses").firstChild.nodeValue = "Number of Losses: " + numOfLosses;
        document.getElementById("remaining").firstChild.nodeValue = "Guesses Remaining: " + userGuessesLeft;
        document.getElementById("playerguess").firstChild.nodeValue = "Letters you've guessed so far: " + userGuessedLetters;
    };
};