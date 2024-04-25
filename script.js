var timer=40;
var score=0;
var hitrn=0;


function incrScore(){
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}

function getNewHit(){
     hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clut="";
    for(var i=1;i<=168;i++){
         var rn= Math.floor(Math.random()*10);
         clut += `<div class="bubble">${rn}</div>`; 
}

document.querySelector("#pbtm").innerHTML=clut;
}


function runtimer(){
    var timerint= setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1> Game Over </h1>`;
        }
    },1000);
}
 
document.querySelector("#pbtm").addEventListener("click", 
   function(dets){
    var clicktheNum = Number(dets.target.textContent);
    if(clicktheNum===hitrn){
        incrScore();
        makeBubble();
        getNewHit();
    }
});
runtimer();
makeBubble();
getNewHit();