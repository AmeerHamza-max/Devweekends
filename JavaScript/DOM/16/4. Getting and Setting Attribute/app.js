// href
const a=document.querySelector("a");
console.log(a);
console.log(a.href);
console.log(a.href="https://www.youtube.com") ;
// value
let input=document.querySelector("input");
console.log(input);
console.log(input.value)
// type
console.log(input.type)
// getAttribute(attrName)
console.log(input.value)
// setAttribute(attrName, value)
a.href="https://www.youtube.com/@huxnwebdev";
input.value="Bye";
input.type="password";
// input.placeholder="Please Provide a strong password"
input.value=""


//getAttribute

console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));


// setAttribute

console.log(input.setAttribute("placeholder","Password"));
console.log(input.setAttribute("type","date"))
