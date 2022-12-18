// Must use the `alert()`, `confirm()`, and `prompt()` methods to collect user input and display information to the user.
// window.alert("Want to play a game?");
// window.prompt("Select Rock, Paper, or Scissors");
// window.confirm("Play again?");

// window.alert("You have now entered a game of Rock Paper Scissors against the computer")
// // Choice
// window.prompt("Please input r for rock, p for paper and s for scissors. Click OK to enter.")

let choice = prompt("Please input r for rock, p for paper and s for scissors. Click OK to enter.", "")


while (choice.toLowerCase != null) {
    if (choice.toLowerCase === "r") {
        window.alert("You have selected rock.")
    }
    else if (choice.toLowerCase === "p") {
        window.alert("You have selected paper.")
    }
    else if (choice.toLowerCase === "s") {
        window.alert("You have selected scissors.")
    }
}

// get rock, paper, scissors choice

// computer compares input value against computer output

// computer displays results