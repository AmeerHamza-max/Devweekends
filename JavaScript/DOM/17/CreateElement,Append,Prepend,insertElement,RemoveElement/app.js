// Creating Elements
// let h1=document.createElement("h1");
// h1.textContent="Hello World";
// h1.classList.add("greetings")
// console.log(h1);
// let body=document.querySelector("body");
// body.append(h1);


// ______________________________________________

// const ul=document.querySelector("ul");
// const newLi=document.createElement("li");
// newLi.innerText="I'm li tag";
// const firstLi=document.querySelector("li")
// // selector insetBefore(what,where)
// ul.insertBefore(newLi,firstLi);

//_______________________________________________________

// insert a adjacent element
// const firstP=document.querySelector("p");
// const i=document.createElement("i");
// i.innerText="Red";
// i.style.color="red";
// firstP.insertAdjacentElement("beforebegin",i)
// firstP.insertAdjacentElement("afterbegin",i) 
// firstP.insertAdjacentElement("afterend",i) 
// firstP.insertAdjacentElement("afterend",i) 



// ___________________________________________________


// append and prepand 
let i2 =document.createElement("i");
i2.innerText="I'm Italics";
i2.style.color="blue"
let section=document.querySelector("section");
const span=document.createElement("span");
span.innerText="Hamza";
span.style.color="crimson";
section.append(i2,span);


// prepend
section.prepend(i2,span);


// _________________________________________________

const newList=document.querySelector(".new-list");
newList.removeChild(document.querySelector(".fourth"))

// Remove All
newList.remove();

