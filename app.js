let gameSeq =[];
let userSeq =[];

let btns = ["red","yellow","green","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2"); 

document.addEventListener("keypress" , function(){
    if( started == false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}


function levelUp (){
    level++;
    userSeq= [];
    h2.innerText =` Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3); 
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); 

    gameSeq.push(randColor);
    console.log(gameSeq);
    
        gameflash(randBtn);
}
  
function checkAns(idx){
 
 if (gameSeq[idx] === userSeq[idx]){
    if (gameSeq.length == userSeq.length){
        setTimeout(levelUp,1000);
    }
 }else {
    h2.innerHTML =`game over! Your score was<b> ${level} </b> <br> press any key to restart game.`;

    let h3= document.querySelector("h3");
    let score = level; 
    let highScore = 0;
    if(highScore > level){
        h3.innerHTML=`highest score = ${score}`;
    }else {
        highScore = score;
        h3.innerHTML=`highest score = ${highScore}`;
    }
    h3.innerHTML=`highest score = ${highScore}`;

    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset(); 
}
}

function btnPress() {
    let btn = this;
    userflash(btn);

   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   console.log(userSeq);

   checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){

    started = false;
    level = 0;
    userSeq = [];
    gameSeq =[];

}