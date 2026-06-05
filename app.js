let gameSeq = [];
let userSeq =[];

let btns = ["yellow" , "red" , "purple" , "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started==false){
    console.log("game is started");
    started = true ;
    }

    levelUp();
});

function gameflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    } , 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    } , 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;

    let randidx = Math.floor(Math.random()*4);
    let randcolour = btns[randidx]; //random button choose
    let randbtn = document.querySelector(`.${randcolour}`);
   
    gameSeq.push(randcolour);
    console.log(gameSeq);
    gameflash(randbtn);
}

function checkans(idx) {

    if(userSeq[idx]==gameSeq[idx]){
        console.log("same value");
        if(userSeq.length == gameSeq.length){
          setTimeout(levelUp ,1000);
        }
    }else{
        h2.innerHTML = `GAME OVER ! Your score was <b> ${level}</b> .  <br/> Press any key to start again .`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
             document.querySelector("body").style.backgroundColor = "white";
        } , 200);
        reset();
    }
}

function btnpress() {
   let btn = this;
   userflash(btn);

   let usercolour = btn.getAttribute("id");
   console.log("usercolour");
   userSeq.push(usercolour);

   checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click" , btnpress);
}

function reset () {
    started = false;
    gameSeq=[];
    userSeq=[];
    level= -1;

}