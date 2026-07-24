//all of these in console


console.log(window);
console.log(window.document);
console.dir(document);

//                                          meta(Head second child)
// First Window ==>  document ==> HTML => HEAD(first child)=>title(first HEAD child)
//                                 => Body(Second HTML Child)

console.log(document.baseURI);
console.log(document.links[2]);
console.log(document.getElementById("firstHeading"));
console.log(document.getElementById("firstHeading")).innerHTML="Ameer Hamza";
