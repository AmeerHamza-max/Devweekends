// // Object literal
// // That you literally make an object

// const user = {
//     username:"Hamza",
//     loginCount:8,
//     signedIn:true,
//     getUsesrDetails:function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }
// console.log(this);
// console.log(user.username);
// console.log(user.getUsesrDetails());


// const user2 = {
//     username:"Hamza",
//     loginCount:8,
//     signedIn:true,
//     getUsesrDetails:function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }



// const promiseOne = new Promise();

// If you don't user new keyword than it overwrites the previous values


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting= function(){
        console.log(`Welcome ${this.username}`)
    }
    this.greeting();
    return this;
}
// console.log(User("Hamza","3",true));


const userOne =new User("Hamza",12,true);
// const userTwo = new User("Ameer Hamza",11,false);
// console.log(userOne);
console.log(userOne instanceof User);
console.log(userOne.constructor);
