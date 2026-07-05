const increment=document.querySelector(".inc");
const decrement=document.querySelector(".dec");
const reset=document.querySelector(".res");
const counter=document.querySelector(".counter");
let count = 0;

increment.addEventListener("click",()=>{
    count =count+1;
    counter.textContent=count;
})
decrement.addEventListener("click",()=>{
    count = count - 1;
    if(count >= 0){
        counter.textContent = count;
    }
})

reset.addEventListener("click",()=>{
    count = 0 ;
    counter.textContent = count;
})