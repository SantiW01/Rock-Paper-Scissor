function GetComputerChoice() {
  switch (Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
    case 1:
      return "Paper";
    case 2:
      return "Scissor";
    case 3:
      return "Rock";
  }
}

function GetPlayerChoice() {
  return String(prompt("What are you gonna choose?"));
}

function PlayRound(playerChoice, computerChoice) {
  if (
    playerChoice != "Rock" &&
    playerChoice != "Scissor" &&
    playerChoice != "Paper"
  )
    return "You must play with rock, paper or scissor";
  if (
    (playerChoice == "Paper" && computerChoice == "Paper") ||
    (playerChoice == "Rock" && computerChoice == "Rock") ||
    (playerChoice == "Scissor" && computerChoice == "Scissor")
  ) {
    return "It's a tie";
  }

  if (
    (playerChoice == "Rock" && computerChoice == "Scissor") ||
    (playerChoice == "Paper" && playerChoice == "Rock") ||
    (playerChoice == "Scissor" && computerChoice == "Paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

console.log(PlayRound(GetPlayerChoice(), GetComputerChoice()));
