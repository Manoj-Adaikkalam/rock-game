let humanScore = 0;
let computerScore = 0;

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
        }

        else if (computer === "scissors"){
            console.log("You win! Rock beats Scissor");
            humanScore = humanScore+1;
        }

        else{
            console.log("rock-tied");
        }
    }
    
    else if(human === "paper"){
        if (computer === "rock"){
            console.log("You win! Paper beats Rock");
            humanScore = humanScore+1;
        }

        else if(computer === "scissors"){
            console.log("You lose! Scissor beats Paper");
            computerScore = computerScore+1;
        }
        
        else{
            console.log("paper-tied");
        }


    }


    else if(human==="scissors") {
        if (computer === "rock"){
            console.log("You lose! Rock beats Scissor");
            computerScore = computerScore+1;
        }

        else if(computer === "paper"){
            console.log("You win! Scissor beats Paper");
            humanScore = humanScore + 1;
        }
        
        else{
            console.log("scissor-tied");
        }


    }

    return;
    
}


function playGame(){
    

    for(let i =0 ; i<=4 ;i=i+1){
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
        console.log("Congratulations, You Won!!!!!");
    }

    else if(humanScore === computerScore){
        console.log("Match Tied....");
    }

    else{
        console.log("Sorry, Computer Wins!");
    }
}

playGame();
