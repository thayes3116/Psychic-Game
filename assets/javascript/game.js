var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    guessesMade = [],
    wins = 0,
    losses = 0,
    guessesLeft = 9,
    computerGuess = "";
	

	//Take and store user entry
	document.onkeyup = function(event) {
    	var userGuess = event.key;

	//Generate computer guess
    if(guessesLeft === 9){
    	computerGuess = letters[Math.floor(Math.random() * letters.length)]
		console.log('computer guess ' + computerGuess);
    }
    //check validity of user entry and remove entered letters from letters array
    var checker = letters.indexOf(userGuess)

    if (checker >= 0){
    	letters.splice(letters.indexOf(userGuess),1)

    
    //If User and computer match add a win and reset guesses left
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessesMade = [];
        letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

        
    //If User doesn't match computer guesses left -1 and store 
    //guesses in array guesses made
    } else {
        guessesLeft--;
        guessesMade.push(userGuess);
      
    }
    //If user has no guesses set guesses left to 9, add 1 loss
    //,and clear guessesMade array
    if (guessesLeft === 0) {
        guessesLeft = 9
        losses++
        guessesMade = []
        letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
       }
       
    }
    //If user doent enter valid key
    else{
       	alert("Please enter a valid key");
       }
    document.getElementById("wow").innerHTML = wins;
    document.getElementById("boo").innerHTML = losses;
    document.getElementById("guessesR").innerHTML = guessesLeft;
    document.getElementById("uguesses").innerHTML = guessesMade;
    console.log("losses: " + losses);
    console.log("guesses left " + guessesLeft);
    console.log("Guesses Made: " + guessesMade);
    console.log("wins: " + wins);
}
