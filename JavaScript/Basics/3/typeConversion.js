//Type of conversion 
let money=50;
console.log(typeof money);

let money1='50';
console.log(typeof money1);

money1+=money1;
console.log(typeof money1);//this will also convert it into a number

money1=Number(money1);//this will also convert into number


//-- convert string to a number

money1=parseInt(typeof money1);
console.log(money);



//converting number to a string

let m=5;
m=m.toString();
m=String(m);

//convert string to decimal 

let b="50.245";
b=parseFloat(b);
console.log(b);
console.log(typeof b);


