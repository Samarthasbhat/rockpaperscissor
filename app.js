let userScore = 0;
let compScore = 0;

//choice selection
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    //rock, paper, scissors
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const drawGame = () =>{
    msg.innerText = "Game was drawn. Play Again";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) =>{
 if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your  ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
 }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose...${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";

 }
}

const playGame = (userChoice)=>{
    //Generate computer choice -> modular
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id"); 
        console.log("choice clicked", userChoice);
        playGame(userChoice);
    });
});