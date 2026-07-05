// ----------- BAD WAY-----------
const secondBtn=document.querySelector(".second-btn");
secondBtn.onclick=function(){
    console.log("Ameer Hamza")
}

// ----------- GREAT WAY-----------
function greetings(){
    console.log("Hello World")
}

const best=document.querySelector(".best");
best.addEventListener("click",greetings);


// ----------- Event (e) Object -----------


const input=document.querySelector("input");
const form=document.querySelector("form");
form.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(event);
    console.log(input.value);
})