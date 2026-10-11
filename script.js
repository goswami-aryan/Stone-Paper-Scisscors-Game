let userScore=0;
let compScore=0;


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice= () => {
   let options = ["rock", "paper", "scissors"];
   const randomIdx = Math.floor(Math.random()*3);
   return options[randomIdx];
}

const drawGame = () =>{
    
    msg.innerText="Game Draw!(Play Again)";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}

const showWinner= (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats computer ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }
    else
     {  compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! computer ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
        
} 

const playGame= (userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
           userWin = compChoice==="scissors"?false:true;
        }
        else{
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
   
    choice.addEventListener('click', () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})