function one(){
    const username = "Hamza";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();

if(true){
    const username = "Hamza";
    if(username == "Hamza"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// ####################################

addone(5);
function addone(num){
    return num + 1;
}
addone(5);

// addTwo(5);
const addTwo = function(num){
    return num + 2;
}
addTwo(5);