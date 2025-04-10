function playGame(playerChoice)
{
    const choice = ["rock", "paper", "scissor"];
    const computerChoice = choice[ Math.floor (Math.random() * 3) ];      // Math.floor (Math.random * 3) chooses a random index from 1-3

    document.getElementById("p").innerText = "Player choose : " + playerChoice;
    document.getElementById("c").innerText = "Computer choose : " + computerChoice;


    let result = "";

    if(playerChoice == computerChoice)
        result = "Draw";
    else if((playerChoice == "rock" && computerChoice == "scissor") || (playerChoice == "scissor" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "rock")) 
        result = "You win 🎉";
    else
        result = "You lose 😢";

    document.getElementById("res").innerText = result;
}

