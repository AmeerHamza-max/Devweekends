// When we call the forEach helper we pass in anonymous callback
// function.
// This function gets called one time for every element in 
// the array whatever is inside the function that logic happens

const colors=['teal','blue','red','green'];
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }


colors.forEach(function(color){
    console.log(color)
})

const words=["hello","bird","table","football","pipe"];
const capwords=words.forEach((word,index,arr)=>{
    console.log(word);
    console.log(index);
    console.log(arr);
    arr[index]=word[0].toUpperCase()+word.substring(1);

})
console.log(capwords);



const numbers=[1,2,3,4,5];
let sum=0;
function adder(number,sum){
    number.forEach((num)=>{
        sum=sum+num;

    })
    return sum;
}

console.log(adder(numbers,sum));



/// Map Method 
// The map() method creates a new array populated with the 
// results of calling a provided function on every element
// in the calling array.

let numbers1=[1,2,3,4,5];
let double=numbers1.map(num=>num*2);
console.log(double);

// Difference between map and for each 
// Map method will not modify the exisiting array but it gives a new array
// for each method modify the real array and gives the number



let peoples=[
    {firstName:"Ameer",lastName:"Hamza"},
    {firstName:"Adeel",lastName:"Iqbal"},
    {firstName:"Jayne",lastName:"Cobb"},
]
const results=peoples.map(person=>{
    return [person.firstName,person.lastName];
})

console.log(results);

let random=[Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*20),Math.floor(Math.random()*30),Math.floor(Math.random()*40),Math.floor(Math.random()*50),Math.floor(Math.random()*100)];
console.log("This is a random number = ",random);

let newArr=random.map((ran)=>{
    console.log(ran);
    return ran*10;
})
console.log(newArr);


// The filter() method is a built-in array method in Javascript
// that allows you to create a new array containing elements
// that pass a certain condition. It provides a clean and 
// concise way to filter out elements from an array based on
// a specified criteria

const songs=[
    {name:"Lucky You", duration:4.34},
    {name:"Just Like You",duration:3.23},
    {name:"The Search",duration:2.33},
    {name:"Old Town Road",duration:1.43},
    {name:"The Box",duration:5.23},
];
console.log(songs.filter((song) => song.duration > 3));
const computers=[
    {ram:4,hdd:100},
    {ram:8,hdd:200},
    {ram:16,hdd:300},
    {ram:32,hdd:400},
    
];
console.log(computers.filter(com=> com.ram > 16));
console.log(computers.filter(com=> com.ram <= 16));




const ages=[32,33,16,40];

console.log(ages.filter((ages)=>ages>18));

const words1=[
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

console.log(words1.filter((word)=> word.length>6));


// The find() method is another built-in array helper in 
// Javascript that allows you to find the first element in 
// an array that matches a specific condition. It returns 
// the value of the first element that satisfies the given
// testing function, or undefined if no element is found 


const findHdd=computers.find((hdd)=>hdd.hdd==200);
console.log(findHdd);



const post=[
    {id:1,content:"Good Post"},
    {id:2,content:"Funny Post"},
    {id:3,content:"Sad Post"},
    {id:4,content:"Good Post"},
]

// it gives us first post 
const postRes=post.find(post => post.content==="Funny Post");
console.log(postRes);


const age1=[3,10,18,20];
function checkAge(age){
    return age > 18;
}
console.log(age1.find(checkAge));

// The every() and some() are two built-in array methods in
// Javascript that allows you to check the elements on an array
// based on a given condition. Both methods take a callback 
// function as an argument which is applied to each element of
// the array 

// the every() method tasks whether all elements in the array
// pass the condtion specified by the provided callback 
// function. It returns true if the callback function returns
// true for every element, and false if any element fails 
// the condition 

// The some() methdo tests whether at least one element in 
// the array the condition specified by the provided callback
// function. It returns true if the callback function returns
// true for functions. It returns true if the callback 
// function returns true for at least one element, and false
// if no element passes the condtion.


const fewPeople=["Hamza","Adeel","Junaid","Mazhar"];
const res=fewPeople.every(people =>people.length>=4);
const res2=fewPeople.some(people => people.length>5);
console.log(res);
console.log(res2);


const everyRes=songs.every(song=>song.duration>3);
const someRes=songs.some(song=>song.duration>3);
console.log(everyRes);
console.log(someRes);



let products=[
    {name:"Checkers",category:"Toys"},
    {name:"Harry Potter", category:"Books"},
    {name:"iPhone", category:"Electronics"},
    {name:"Learn PHP", category:"Books"},
]

let everyRes1=products.every(prodcut=>prodcut.category==="Books");
let someRes1=products.some(product => product.category==='Books');
console.log(everyRes1);
console.log(someRes1);


// The reduce() method applies the reducer function to
// each element of an array. accumlating the results into 
// a single value. It is often used to perform calculations
// or aggregations an array elements and simplify the 
// array into a single value.

// ['one','two','three']; 
const number3=[1,2,3,4,5];
const sum1=numbers.reduce((p,c)=> {
    console.log(`Previous: ${p}`);
    console.log(`Current : ${c}`)
    return p+c;
},0)
console.log(sum1);



// Often used to perform calculations or aggregations an array
// elements and simplify the array into a single value

const newPeoples=[
    {
        name:"Ameer Hamza",
        age:22,
    },
    {
        name:"Junaid",
        age:24,
    },
    {
        name:"Adeel Iqbal",
        age:25,
    },
    {
        name:"Mazhar",
        age:50,
    }
]


const oldestAge=newPeoples.reduce((p,c)=>(c.age > p ?c.age:p),0)
console.log(oldestAge)


const words2=[
    "apple",
    "banana",
    "orange",
    "banana",
    "apple",
    "orange",
    "apple",
    "grape"
];
const wordOfFrequency=words.reduce((frequencyMap,word)=>{
    frequencyMap[word]=(frequencyMap[word] || 0+1)
    return frequencyMap;
},{})
console.log(wordOfFrequency);


function calculateProduct(arr){
   const product= arr.reduce((p,c)=> p*c);
   return product;
}
const number4=[2,3,4,5];
const product=calculateProduct(number4);
console.log(product);

// Map is a built in data structure introduces in (ES6) that 
// allows you to store key-value where both the keys and values
// can be of any data type. I5 is similar to an object, but
// with a few key difference.

// -> Key can be of any data type: Unlike objects, where
// keys are limited to strings and symbols. Map allows you 
// to use any data type as keys, including numbers,booleans
// objects and even other map instances.

// Maintains insertion order: Map preserves the order of 
// key-value pairs as they were inserted, while object keys 
// may not be guarantedd to be in a specific order.

// -> iteration: Map provides built-in methods for easy
// iteration over its elements.

