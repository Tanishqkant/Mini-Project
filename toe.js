let boxes =document.querySelectorAll(".box1")
let reset=document.querySelector("#reset")
let newGame =document.querySelector("#naya")
let message =document.querySelector(".message")
let msg=document.querySelector("#msg")

let turnO = true;
const winnerPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true
    buttonEnable();
    message.classList.add("hide")
}
boxes.forEach((box1)=>{
    box1.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO){
            box1.innerText="O";
            turnO=false;
        }else{
            box1.innerText="X";
            turnO=true;
        }
        box1.disabled =true;

        trackWinner();
    })
})
const buttondisable =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const buttonEnable =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner =(Winner)=>{
    msg.innerText =`congratulations, Winner is ${Winner}`;
    message.classList.remove("hide");
    buttondisable();

};
const trackWinner =()=>{
    for(pattern of winnerPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !=""&& pos2 !=""&& pos3 !=""){
            if(pos1=== pos2 && pos2===pos3){
                console.log("winner", pos1);
                showWinner(pos1)
            }
       }
        
    }
}

naya.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)
