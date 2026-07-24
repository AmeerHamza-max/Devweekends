class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){ //static does not give access 
        return `123`;
    }
}

const hitesh = new User("Hamza");
// console.log(hitesh.createId());

class Teacher extends User {
    constructor(email){
        super(username);
        this.email=email;
    }
}
const iphone = new Teacher("iphone","i@phone.com");
console.log(iphone);
