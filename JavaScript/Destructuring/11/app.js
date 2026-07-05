// Destructuring allows us to unpack values from data-structures
//(Arrays, Objects) into separate distinct variables.

const foo=['one','two','three','four'];
console.log(foo[0]);
console.log(foo[1]);
console.log(foo[2]);
// console.log(one);

// const [one,two,three]=foo;
// console.log(one);
// console.log(two);
// console.log(three);

const [red,green,blue]=foo;
console.log(red);
console.log(green);//you can give any name while destrucuturing like giving variable name 


let a,b;
[a=5,b=8]=[1];
[a=5,b=8]=[];


// console.log(a);//1
console.log(a);//5


function f(){
    return [1,3];
}
let aa,bb;
[aa,bb]=f();
console.log(aa);
console.log(bb);


//ignoring the value it will not work on object destructuring
function ff(){
    return [1,2,3];
}

const [aaa,,bbb]=ff();
console.log(aaa);
console.log(bbb);



const [c,...d]=['one','two','three','four'];
console.log(d);
console.log(c);


