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

function updateScore() {
  divScore.textContent = `Your Score ${humanScore}, CPU Score ${computerScore}`;

  if (humanScore ===5){
    alert("You win!")
    humanScore = 0
    computerScore = 0

  } else if (computerScore === 5){
    alert("CPU wins!")
    humanScore = 0
    computerScore = 0
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert("It's a Tie!");
  } else if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    humanScore += 1;
    alert(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore += 1;
    alert(`You lost! ${computerChoice} beats ${humanChoice}`);
  }

  updateScore();
}

let rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));

let paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);

let scissorBtn = document.querySelector("#scissors");
scissorBtn.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);

let divScore = document.querySelector("#scores");
