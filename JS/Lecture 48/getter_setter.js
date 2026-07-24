class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
         this._email=value;
    }
    get password(){
        return `${this._password}Hamza`;
    }
    
    set password(value){
        this._password = value;
    }
}

const Hamza = new User("Hamzza.ai","123");
console.log(Hamza.email);



function User(email,password){
    this._email=email;
    this._password=password;
    Object.defineProperty(this,"email",{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this.email=value;
        }

        
    })
    Object.defineProperty(this,"password",{
        get:function(){
            return this.password.toUpperCase();
        },
        set:function(value){
            this.password=value;
        }

        
    })
}
const hamza = new User("Hamza@hamza.com","hamza");
console.log(hamza.email);