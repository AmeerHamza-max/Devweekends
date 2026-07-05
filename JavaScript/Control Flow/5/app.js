let a = 20;
let b=20;

if(a > b){
    console.log('a is greater then b');

}
else if(a < b){
    console.log('a is less then b');
}
else{
    console.log('a is equal to b');
}


//Conditional Statments
let time=10;
let greetings;
if(time < 10){
    greetings='Good Morning';
    console.log(greetings);
}
else if(time < 20){
    greetings='Good Day';
    console.log(greetings);
}
else{
    greetings='Good Evening';
    console.log(greetings);
}


///// Switch Statement //////////////
// switch(expression){
    //case x:
        //print
        //break;
    // case y:
    // print;
    //break;
// }

let x='0';
let bulb;
switch(x){
    case 0:
        bulb="off";
        break;
    case 1:
        bulb="On";
        break;
    default:
        bulb="no value found";
        console.log(bulb);
}
let day='monday';
switch(day){
    case 'monday':
        console.log('Today is monday');
        break;
    case 'tuesday':
        console.log("Today is tuesday");
        break;
    case 'wednesday':
        console.log('Today is wednesday');
        break;
    case 'tuesday':
        console.log('Today is tuesday');
        break;
    case 'saturday':
        console.log("Today is saturday");
        break;
    case 'sunday':
        console.log("Today is sunday");
        break;
    default:
        console.log("Don't know what day is today"); 

}