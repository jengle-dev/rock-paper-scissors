//keep score
var wins = 0;
var ties = 0;
var losses = 0;

var choice = ["r", "p", "s"]

var playGame = function () {
    var userChoice = window.prompt("Please type r for rock, p for paper, s for scissors and click OK.");

    if (!choice) {
        return;
    }

    choice = choice.toLowerCase(); {
        var randomChoice = Math.floor(Math.random() * choice.length);
        var compChoice = choice[randomChoice];

        window.alert("You chose" + choice + "." + " The computer chose" +compChoice +".")

        if (choice === compChoice) {
            ties++;
            window.alert("It's a tie! Try again.")
        }

        else if (
            (choice == "r" && compChoice === "s") ||
            (choice == "p" && compChoice === "r") ||
            (choice == "s" && compChoice === "p") 
            ) {
                wins++
                window.alert("You are the winner!");
        }

        else {
            losses++;
            window.alert("I'm sorry. You did not win.")
        }
        window.alert("Scoreboard: \nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

        var playAgain = window.confirm("Would you like to play again?")
        if (playAgain){
            playGame();
            }
        else {
            window.close();
            }
        }
}
playGame();
