let firstLi=document.querySelector("li");
console.log(firstLi);
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);


// children
const ul=document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[3]);
console.log(ul.children[4]);
console.log(ul.children[0].innerHTML);


// sibiling

console.log(firstLi.nextElementSibling)
console.log(firstLi.nextElementSibling.textContent)
console.log(firstLi.nextElementSibling.textContent)




let fourth=document.querySelector(".fourth")
console.log(fourth.previousElementSibling);
console.log(fourth.previousElementSibling.previousElementSibling);
console.log(fourth.previousElementSibling.previousElementSibling.previousElementSibling);
console.log(fourth.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling);



