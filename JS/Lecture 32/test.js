document.getElementById("title");
document.getElementById("title");
document.getElementById("title").id;
// document.getElementById("title").class;//undefined
document.getElementById("title").className;
document.getElementById("title").getAttribute("class");
document.getElementById("title").setAttribute("class","test");
// It always overwrite the previous one set attribute but you can use like class "test heading"
const title=document.getElementById("title");
title.style.backgroundColor="green";
// innerHTML show the complete html if some text is hidden then it also shows the text
title.innerHTML;
// inner text does not shows the text if we hide the text using display:hidden
title.innerText;
// text content shows the hidden text also 
title.textContent;

document.getElementsByClassName("heading");

document.querySelector("h1");

document.querySelector("#title");

document.querySelector(".heading");

document.querySelector('input[type="password"]');


const myul=document.querySelector('ul');
myul.querySelector("li");

const turnGreen = myul.querySelector("li");
turnGreen.style.backgroundColor="green";

turnGreen.innerText = "five";


const tempLiList=document.querySelectorAll("li");
tempLiList.style.color="green";
tempLiList[0].style.color="green";

const myH1 = document.querySelectorAll("h1");
myH1[0].style.color="green";

tempLiList.forEach(function (li){
    li.style.backgroundColor='green';
})

document.getElementsByClassName("list-item");

const tempClassList = document.getElementsByClassName("list-item");


tempClassList.forEach(function(li){
    console.log(li);
})




const myConvertedArray =Array.from(tempClassList);
myConvertedArray.forEach(function(li){
    li.style.color = "orange";
})



