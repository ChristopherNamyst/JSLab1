//start with greeting
var greeting = prompt("Hello, Do You Think You Can Defeat The ALMIGHTY GRANT? Please ENTER 1 for YES or 2 for NO.");

//ask user to input their name
if (greeting === "1") {
    var userName = prompt("OK. Please Type Your Name").toUpperCase();
    var startGreeting = prompt("Thanks " + userName + " !! To Start, Please Press ENTER.");

} else {
    var goodBye = prompt("Have A Great Day!!");
}


var player1 = 40; //declaring a variable for player start points
var grantChirpus = 10; // declaring a variable for Grant Chirpus start points 
var roundsPlayed = 0; //declaring a variable for rounds played

//Code for game
// while loop to run thru players score and Grants score while more than 0, and there have been less than 3 rounds played, then continue the game
while (player1 > 0 && grantChirpus > 0 && roundsPlayed < 3) {
    grantChirpus -= (Math.floor(Math.random() * 2) + 1);
    player1 -= (Math.floor(Math.random() * 2) + 1);
    console.log("The Chirpinator's Score is " + grantChirpus); //logs grants score to the console
    console.log(userName + ", Your Score is " + player1); // logs players score to the console

    if (grantChirpus <= 0 && player1 > 0 && roundsPlayed <= 2) {
        roundsPlayed += 1;
        console.log("Let's Play Again!!");

        if (roundsPlayed < 3) {
            grantChirpus = 10;
        }
        if (roundsPlayed === 3 && grantChirpus <= 0 && player1 > 0) {
            console.log("The Almighty Grant Has Won!! That's all for now, Have a Great Day!!");
        } else if (roundsPlayed === 3 && grantChirpus > 0 && player1 <= 0) {
            console.log("CONGRATS! " + userName + "You Have Won!!");
        }
    }
}
