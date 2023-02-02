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
