//Object singelton or Object Constructor
const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn = false;

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstname:"Ameer",
            lastname:"Hamza",
        }
    }
}
console.log(tinderUser);
console.log(regularUser.fullname.userFullName.firstname);
const obj1 = {1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"e",6:"f"};
const obj4={7:"g",8:"h",9:"i"};

// const obj3 = {obj1,obj2};
// const obj3=Object.assign({},obj1,obj2,obj3);
const obj3 = {...obj1,...obj2};
console.log(obj3);


const users = [
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:1,
        email:"h@gmail.com",
    },
]

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));