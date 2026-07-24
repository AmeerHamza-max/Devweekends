function SetUserName (username){
    //Complex DB Calls
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    SetUserName.call(this,username);//explicitly call not implicitly call

    this.email = email;
    this.password = password;
}


const chai = new createUser("chai","chai@fb.com","123");
console.log(chai);
