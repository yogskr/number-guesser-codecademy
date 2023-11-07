let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate random numbers between 0 and 9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Determine the winner by returning the closest number to the target's number
const compareGuesses = (human, computer, secretTarget) => {
  if (Math.abs(human - secretTarget) < Math.abs(computer - secretTarget)) {
    return true;
  } else if (
    Math.abs(human - secretTarget) === Math.abs(computer - secretTarget)
  ) {
    return true;
  } else {
    return false;
  }
};

// Updating score when human or computer wins the round
const updateScore = (winner) => {
  if (winner === "human" && winner != "computer") {
    humanScore++;
  } else if (winner === "computer" && winner != "human") {
    computerScore++;
  }
};

// Update the round number after each round
const advanceRound = () => {
  currentRoundNumber++;
};
