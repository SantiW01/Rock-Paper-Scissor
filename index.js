let playerPoints = 0;
let computerPoints = 0;
let draws = 0;
let rounds = 0;
let gameOver = false;
function GetComputerChoice() {
  return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function GetPlayerChoice(number) {
  PlayRound(number, GetComputerChoice());
}

function PlayRound(playerChoice, computerChoice) {
  if (gameOver != true) {
    let message = "";
    if (
      (playerChoice == 1 && computerChoice == 1) ||
      (playerChoice == 2 && computerChoice == 2) ||
      (playerChoice == 3 && computerChoice == 3)
    ) {
      message = "It's a tie";
      draws += 1;
      Game(message);
    } else if (
      (playerChoice == 1 && computerChoice == 3) ||
      (playerChoice == 2 && playerChoice == 1) ||
      (playerChoice == 3 && computerChoice == 2)
    ) {
      message = "You win!";
      playerPoints += 1;
      Game(message);
    } else {
      message = "You lose!";
      computerPoints += 1;
      Game(message);
    }
  }
}

function Game(message) {
  if (rounds < 5) {
    ShowPoints();
    rounds += 1;
  } else {
    gameOver = true;
    const gameOverMessage = document.createElement("h1");
    gameOverMessage.textContent = "That's all for today, folks!";
    gameOverMessage.setAttribute("class", "gameOver");
    document.querySelector(".gameOverContainer").appendChild(gameOverMessage);
  }
}

function ShowPoints() {
  const playerPointsTag = document.querySelector(".player-points");
  const computerPointsTag = document.querySelector(".computer-points");
  playerPointsTag.textContent = playerPoints;
  computerPointsTag.textContent = computerPoints;
}
