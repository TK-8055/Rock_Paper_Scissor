const rock=`<picture class="emoji">
            <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44a_1f3fb/512.webp" type="image/webp">
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44a_1f3fb/512.gif" alt="👊" width="32" height="32">
        </picture>`;

const paper=`<picture class="emoji">
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1faf1_1f3fb/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1faf1_1f3fb/512.gif" alt="🫱" width="32" height="32">
</picture>`;

const scissor=`<picture class="emoji">
    <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fb/512.webp" type="image/webp">
    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fb/512.gif" alt="✌" width="32" height="32">
</picture>`;

const hand=`<picture  class="emoji">
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d_1f3fb/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d_1f3fb/512.gif" alt="🤝" width="32" height="32">
</picture>`;
const option=["rock","paper","scissor"];


function ro(){
   let val=Math.floor(Math.random()*option.length);
    logic(rock,val);

}
function pa(){
    let val=Math.floor(Math.random()*option.length);
    logic(paper,val);
}
function sc(){
   let val=Math.floor(Math.random()*option.length);
    logic(scissor,val);
}

function humlog(){
let huma=`<img src="./img/1.svg" class="hum" id="you">`
document.getElementById("you").innerHTML=huma;

let pca=`<img src="./img/1.svg" class="hum" id="pc">`
document.getElementById("pc").innerHTML=pca;

document.getElementById("check").innerText="";

}

function disableButtons() {
  document.getElementById("rockBtn").disabled = true;
  document.getElementById("paperBtn").disabled = true;
  document.getElementById("scissorBtn").disabled = true;
}

function enableButtons() {
  document.getElementById("rockBtn").disabled = false;
  document.getElementById("paperBtn").disabled = false;
  document.getElementById("scissorBtn").disabled = false;
}




let uscore=0;
let pcscore=0;
function logic(a,b){

    if(a==rock&&b==0||a==paper&&b==1||a==scissor&&b==2){
        document.getElementById("check").innerText="Draw";
    }
    else{
        if(a==rock&&b==1||a==paper&&b==2||a==scissor&&b==0){
          document.getElementById("check").innerText="You lose";
          pcscore++;
          document.getElementById("pcsc").innerText=`Score = ${pcscore}`;
          if(pcscore==3){
        document.getElementById("handlog").innerHTML=hand;
        document.getElementById("usc").innerText=`You have lose the Match`;
        document.getElementById("pcsc").innerText=``;
        disableButtons();
setTimeout(() => {
  location.reload();
}, 3000);

    }
        }
        else{
           document.getElementById("check").innerText="You win";
           uscore++;
           document.getElementById("usc").innerText=`Score = ${uscore}`;   
           if(uscore==3){
        document.getElementById("handlog").innerHTML=hand;
        document.getElementById("usc").innerText=`You have won the Match`;
        document.getElementById("pcsc").innerText=``;
        disableButtons();
setTimeout(() => {
  location.reload();
}, 3000);

    }
        }
    }

document.getElementById("you").innerHTML=a;
if(b==0){

    document.getElementById("pc").innerHTML=rock;
}
if(b==1){

    document.getElementById("pc").innerHTML=paper;
}
if(b==2){

    document.getElementById("pc").innerHTML=scissor;
}
disableButtons();

setTimeout(() => {
    humlog();          
    enableButtons();  
}, 2000);

}



window.addEventListener("DOMContentLoaded",humlog);
