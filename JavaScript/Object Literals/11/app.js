// Enhanced object Literals, introduced in ECMAscript 6 (ES6) are a
//set of enhancements to the syntax for defining objects in
// Javascript. These enhancements make it more convenient and concise
//to define object properties and methods


function user(name,age,work){
    return {
        // name:name,
        // age:age,
        // work,
        name,
        age,
        work,
        intro:function(){
            console.log(`My name is ${name} & I'm ${age} years old and I'm a ${work}`)
        }

    };

}
const Hamza =user("Hamza",22,'Programmer');
console.log(Hamza);

const Alex=user("Alex",18,"Designer");
console.log(Alex);
console.log(Alex.intro());


//Exercise 
function simpleVariables(a,b,c){
    return {
        a:a,
        b:b,
        c:c,
        show:function(){
            console.log(`A is ${a} , B is ${b} , C is ${c}`);
        }
    }
}
let simple=simpleVariables(1,2,3);
console.log(simple);
console.log(simple.show());


//second challenge

let lib={
    sum:function(a,b){
        return a+b;
    },
    mult:function(a,b){
        return a*b;
    },
}
console.log(lib.sum(2,3));
console.log(lib.mult(2,3));