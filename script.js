let humanScore = 0;
let computerScore = 0;
let x;

function getComputerChoice(){
    let a = Math.floor(Math.random()*3)+1;
    //console.log(a);

    if (a === 1){
        return "rock";
    }

    else if(a===2){
        return "paper";
    }

    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let b = prompt("Enter your choice for the game!!!");
    let c = b.toLowerCase();

    if (c==="rock" || c==="paper" || c==="scissors"){
        return c;
    }

    else{
        alert("Invalid Input!");
        return getHumanChoice();
    }
}

function playRound(human,computer){
    if (human === "rock")
    {
        if (computer === "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore = computerScore+1;
            x = "You lose! Paper beats Rock";
        }

        else if (computer === "scissors"){
            console.log("You win! Rock beats Scissor");
            humanScore = humanScore+1;
            x = "You win! Rock beats Scissor";
        }

        else{
            console.log("Rock-tied");
            x = "Rock-tied";
        }
    }
    
    else if(human === "paper"){
        if (computer === "rock"){
            console.log("You win! Paper beats Rock");
            humanScore = humanScore+1;
            x = "You win! Paper beats Rock"
        }

        else if(computer === "scissors"){
            console.log("You lose! Scissor beats Paper");
            computerScore = computerScore+1;
            x = "You lose! Scissor beats Paper"
        }
        
        else{
            console.log("Paper-tied");
            x = "Paper-tied";
        }


    }


    else if(human==="scissors") {
        if (computer === "rock"){
            console.log("You lose! Rock beats Scissor");
            computerScore = computerScore+1;
            x = "You lose! Rock beats Scissor";
        }

        else if(computer === "paper"){
            console.log("You win! Scissor beats Paper");
            humanScore = humanScore + 1;
            x = "You win! Scissor beats Paper"
        }
        
        else{
            console.log("Scissor-tied");
            x = "Scissor-tied"
        }


    }

    updateUI(x);

    return;
    
}

function updateUI(y){
 // first content (result of match)
 const f_cont = document.querySelector(".content");
 f_cont.textContent = x;

 const f_hs = document.querySelector(".hs");
 f_hs.textContent = `Human Score : ${humanScore} | Computer Score : ${computerScore}`;

 const f_res = document.querySelector(".res");
 if (humanScore == 5){
    f_res.textContent = "Congratulations, You Won!!!!!";
    humanScore = 0;
    computerScore = 0
 }
 if(computerScore == 5){
    f_res.textContent = "Sorry, Computer Wins!";
    humanScore = 0;
    computerScore = 0;
 }

}

function uiGame(){
    c1 = getComputerChoice();

    // rock part
    const r = document.querySelector("#r");
    r.addEventListener('click', () => { const comp_choice = getComputerChoice(); playRound("rock",comp_choice)});

    // paper part
    const p = document.querySelector("#p");
    p.addEventListener('click', () => { const comp_choice = getComputerChoice(); playRound("paper",comp_choice)});

    // scissor part
    const s = document.querySelector("#s");
    s.addEventListener('click', () => { const comp_choice = getComputerChoice(); playRound("scissors",comp_choice)});

}

uiGame();






/* Commenting this function for ui  improvements

function playGame(){
    

    for(let i =1 ; i<=5 ;i=i+1){
        console.log("*****");
        console.log("round "+i);
        console.log("*****");
        h1 = getHumanChoice();
        //console.log(h1);
        c1 = getComputerChoice();
        //console.log(c1);

        playRound(h1,c1);
        console.log("Human Score : "+ humanScore);
        console.log("Computer Score : "+computerScore);
    }

    if (humanScore > computerScore){
        console.log("*****");
        console.log("Congratulations, You Won!!!!!");
    }

    else if(humanScore === computerScore){
        console.log("*****");
        console.log("Match Tied....");
    }

    else{
        console.log("*****");
        console.log("Sorry, Computer Wins!");
    }
}

playGame();

*/