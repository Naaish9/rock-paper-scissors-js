let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice;

  if (Math.random() < 0.3) {
    choice = "rock";
  } else if (Math.random() < 0.6) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}

function getHumanChoice() {
  let user_choice = prompt("rock, paper or scissors?");
  return user_choice;
}

function playRound(humanChoice, computerChoice) {
  let human_choice = humanChoice.toLowerCase();

  if (human_choice === computerChoice) {
    return "It's a Tie!";
  } else if (
    (human_choice === "paper" && computerChoice === "rock") ||
    (human_choice === "scissors" && computerChoice === "paper") ||
    (human_choice === "rock" && computerChoice === "scissors")
  ) {
    humanScore += 1;
    return `You win! ${human_choice} beats ${computerChoice}`;
  } else {
    computerScore += 1;
    return `You lost! ${computerChoice} beats ${human_choice}`;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }
  if (humanScore === computerScore) {
    return "It's a Tie";
  } else if (humanScore > computerScore) {
    return "You win!";
  } else {
    return "You Lost";
  }
}

console.log(playGame());
