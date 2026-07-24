var c = 300;
let a = 3;
let b =2;
if(true){
    let a = 10;
    const b = 20;
    var c = 40;
    console.log("Inner : ",a);
}

console.log(a);
console.log(b);
console.log(c);