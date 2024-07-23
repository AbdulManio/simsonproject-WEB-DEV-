
let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let heighest=0;

document.addEventListener("keypress",function(){
    if(started==false){
started=true;
console.log("started");
levelup();
    }
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function levelup(){
    userseq=[];
    level++;
    if(heighest<level){
        highest=level;
    }
    h2.innerText= `level ${level}`;
let random=Math.floor(Math.random()*3);
let randcolor=btns[random];
let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
btnflash(randbtn);
}
function btnpress (){
let btn=this;
btnflash(btn);

usercolor=btn.getAttribute("id");
console.log(usercolor)
userseq.push(usercolor);
checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);

}function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000); 
        }
    }else{

        h2.innerHTML=`game over your score was <b>${level} </b> press any key to start ${heighest}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor ="white";
        },150);
        reset();

    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;


}