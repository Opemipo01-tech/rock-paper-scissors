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
// console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("rock,paper or scissors?")
}
// console.log(getHumanChoice());

  // let computerScore = 0;
  // let humanScore = 0;

// console.log(computerScore);
// console.log(humanScore)

function playRound(humanChoice,computerChoice) {
   if(humanChoice === computerChoice) {
      console.log("It's a tie!");
      return "It's a tie!";
   }
    else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("paper beats rock. You win!");
    return "paper beats rock. You win!";
    // humanScore++;
  } 
  else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("paper beats rock. Computer wins!");
    return "paper beats rock. Computer wins!";
    // computerScore++;
  }
  else if(humanChoice === "rock" && computerChoice === "scissors") {
    console.log("rock beats scissors. You win!");
    return "rock beats scissors. You win!";
    // humanScore++;
  }
  else if(humanChoice === "scissors" && computerChoice === "rock") {
    console.log("rock beats scissors. Computer wins!");
    return "rock beats scissors. Computer wins!";
    // computerScore++;
  } 
  else if(humanChoice === "scissors" && computerChoice === "paper") {
    console.log("scissors beats paper. You win!");
    return "scissors beats paper. You win!"
    // humanScore++;
  } 
  else {
    console.log("scissors beats paper. Computer wins!");
    return "scissors beats paper. Computer wins!";
    // computerScore++;
  }
  // console.log("Computer score: ", computerScore);
  // console.log("Human score: ", humanScore);
}
// const computerChoice = getComputerChoice();
// console.log(computerChoice);
// const humanChoice = getHumanChoice().toLowerCase();
// console.log(humanChoice);


// playRound(humanChoice,computerChoice);


function playGame() {
  
     let computerScore = 0;
     let humanScore = 0;

const computerChoice = getComputerChoice();
console.log("Computer chose",computerChoice);
const humanChoice = getHumanChoice().toLowerCase();
console.log("You chose",humanChoice);

 const round1 = playRound(humanChoice,computerChoice);

 if (round1.includes("You win!")){
  humanScore++;
 } 
 else if (round1.includes("Computer wins!")) {
  computerScore++;
 }

  console.log("Computer score: ", computerScore);
  console.log("Human score: ", humanScore);
// set delay for 0.5 seconds

setTimeout(()=> {
  const computerChoice2 = getComputerChoice();
console.log("Computer chose",computerChoice2);
const humanChoice2 = getHumanChoice().toLowerCase();
console.log("You chose",humanChoice2);
  const round2 = playRound(humanChoice2,computerChoice2);
   
  if (round2.includes("You win!")){
  humanScore++;
 } 
 else if (round2.includes("Computer wins!")) {
  computerScore++;
 }

  console.log("Computer score: ", computerScore);
  console.log("Human score: ", humanScore);
}, 500);  

setTimeout(()=> {
  const computerChoice3 = getComputerChoice();
console.log("Computer chose",computerChoice3);
const humanChoice3 = getHumanChoice().toLowerCase();
console.log("You chose",humanChoice3);
  const round3 = playRound(humanChoice3,computerChoice3);
   
  if (round3.includes("You win!")){
  humanScore++;
 } 
 else if (round3.includes("Computer wins!")) {
  computerScore++;
 }

  console.log("Computer score: ", computerScore);
  console.log("Human score: ", humanScore);
}, 500);

setTimeout(()=> {
  const computerChoice4 = getComputerChoice();
console.log("Computer chose",computerChoice4);
const humanChoice4 = getHumanChoice().toLowerCase();
console.log("You chose",humanChoice4);
  const round4 = playRound(humanChoice4,computerChoice4);
   
  if (round4.includes("You win!")){
  humanScore++;
 } 
 else if (round4.includes("Computer wins!")) {
  computerScore++;
 }

  console.log("Computer score: ", computerScore);
  console.log("Human score: ", humanScore);
}, 500);

   setTimeout(()=> {
  const computerChoice5 = getComputerChoice();
console.log("Computer chose",computerChoice5);
const humanChoice5 = getHumanChoice().toLowerCase();
console.log("You chose",humanChoice5);
  const round5 = playRound(humanChoice5,computerChoice5);
   
  if (round5.includes("You win!")){
  humanScore++;
 } 
 else if (round5.includes("Computer wins!")) {
  computerScore++;
 }

  console.log("Computer score: ", computerScore);
  console.log("Human score: ", humanScore);
}, 500);

setTimeout(()=>{
  if (humanScore > computerScore) {
  console.log("You best computer of 5 rounds")
}
else if (humanScore < computerScore) {
  console.log("Computer bests you of 5 rounds")
}
else {
  console.log("They was no best of 5 rounds")
}
}, 10000);





}

playGame();

// Final result



