function getComputerChoice() {
   const randomNum = Math.floor(Math.random() * 3); // This is to make the values either 0,1 or 2 // 

    if(randomNum === 0) {
        return "rock";
    }
    else if(randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const rock = document.querySelector("#rock");
  rock.addEventListener("click" , () => {
    console.log("You chose rock");
    playRound("rock", getComputerChoice());
  });
  
     const paper = document.querySelector("#paper");
     paper.addEventListener("click" , () => {
      console.log("You chose paper");
    playRound("paper", getComputerChoice());
  });
   
     const scissors = document.querySelector("#scissors");
  scissors.addEventListener("click" , () => {
    console.log("You chose scissors");
    playRound("scissors", getComputerChoice());
  });
}
getHumanChoice();
let humanScore = 0;
let computerScore = 0;

const scoreBoard = document.querySelector("#score");
 scoreBoard.textContent = `Human : ${humanScore} | Computer : ${computerScore}`;

 const winner = document.querySelector("#winner");

function updateScore() {
  scoreBoard.textContent = `Human : ${humanScore} | Computer : ${computerScore}`;
}

let gameDone = false;

function playRound(humanChoice,computerChoice) {
  if (gameDone) return;
  
   if(humanChoice === computerChoice) {
      console.log("It's a tie!");
      
   }
    else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
    console.log("paper beats rock. You win!");
     updateScore();
    
  } 
  else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("paper beats rock. Computer wins!");
     updateScore();
    
  }
  else if(humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("rock beats scissors. You win!");
     updateScore();
    
  }
  else if(humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("rock beats scissors. Computer wins!");
     updateScore();

  } 
  else if(humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("scissors beats paper. You win!");
     updateScore();
  
  } 
  else {
    computerScore++;
    console.log("scissors beats paper. Computer wins!");
     updateScore();
  }
   if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      winner.textContent = "You win"
    } else {
      winner.textContent = "computer won"
    }
    gameDone = true;
   }
}
function restart() {
  humanScore = 0;
  computerScore = 0;
  winner.textContent = "";
  updateScore();
}
const restartGame = document.querySelector("#restart");
restartGame.addEventListener("click", () => {
  restart();
})

 





