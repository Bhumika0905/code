let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelectorAll(".functional2");
let newbtn=document.querySelectorAll(".functional");
let msg=document.querySelector("#win");
let msgContainer=document.querySelector(".winner");
let count=0;
let turnO=true;
const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
    if(turnO===true){
        box.innerText="O";
        turnO=false;
    } else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    count++;
    let winWin=checkWinner();
    if(count===9 && !winWin){
        gameOver();
    }
    });
});

const disabling=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const gameOver = () => {
    msg.innerText = `GAME IS A DRAW.`;
    msgContainer.classList.remove("hide");
    disabling();
};

const msgWin=(winner)=>{
    msg.innerText=(`WINNER IS ${winner}`);
    msgContainer.classList.remove("hide");
    disabling();
};

const reset=()=>{
    turnO=true;
    enable();
    msgContainer.classList.add("hide");
    
};

const checkWinner = () =>{
    for (let a of patterns){
       let posVal1=boxes[a[0]].innerText;
       let posVal2=boxes[a[1]].innerText;
       let posVal3=boxes[a[2]].innerText;
       if(posVal1 != "" && posVal2!="" && posVal3!="") {
        if(posVal1===posVal2 && posVal1===posVal3 && posVal2===posVal3){
            console.log("WINNER",posVal1);
            msgWin(posVal1);
        }
       }
    }
};
resetbtn.forEach((btn) => {
    btn.addEventListener("click", reset);
});

newbtn.forEach((btn) => {
    btn.addEventListener("click", reset);
});