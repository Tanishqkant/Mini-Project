let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")
let userValue =document.querySelector("#user-score")
let compScorePara =document.querySelector("#comp-score")

const genCompChoice =()=>{
    const option =["rock","paper","scissors"]
    const randIdx =Math.floor(Math.random()*3)
    return option[randIdx];
}

const drawGame=()=>{
   
    msg.innerText="Its a Draw!"
    msg.style.backgroundColor="#373F47"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userValue.innerText=userScore;
        console.log("You Win!")
        msg.innerText=`You Win!Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="#31CB00"
    }else{
        compScore++;
        compScorePara.innerText=compScore
        msg.innerText=`You lose! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor="#EF2D56"
    }
}
const PlayGame =(userChoice)=>{
    console.log("userChoice is =" ,userChoice)
    const compChoice= genCompChoice();
    console.log("comp Choice =",compChoice)
   
    if(userChoice===compChoice){
         drawGame(); 
    }else{
        let userWin =true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false : true;
        }else if(userChoice==="paper"){
           userWin= compChoice=== "scissoers"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
       PlayGame(userChoice);
    
    });
});