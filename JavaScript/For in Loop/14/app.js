const map=new Map();

const keyOne="string";
const keyTwo={};
const keyThree=function(){

}

map.set(keyOne,"Value of keyone");
map.set(keyTwo,"value of key 2");
map.set(keyThree,"value of key 3");
console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyOne));
console.log(map.size);

for (const [key,value] of map) {
    console.log(`${key} -- ${value}`);
}

for(let key of map.keys()){
    console.log(key);
}
console.log(map);


for (const values of map.values()) {
    console.log(values);
}


const newMap=new Map();

const keythree="a";
const keyfour="b";
const keyfive="c";
console.log(newMap.get("a"));
newMap.set(keythree,"Value of key3");
newMap.set(keyfour,"Value of key4");
newMap.set(keyfive,"Value of key5");
console.log("Size = ",newMap.size);
console.log("Deleted = ",newMap.delete(keyfour));
console.log("Size = ",newMap.size);



// Set is a built-in data strucutre introduced in (ES6)
// that represents a collection of unique values. Unlike
// arrays, Set Allows you to store only unique values, 
// which means duplicate values are automatically removed.
// Each value can occur only within a Set
// Set Objects are usefull when you need to store a list 
// of unique elements and quickly check for the existence
// of a specific value.

const initialValue=[1,2,2,2,2,3];
// const mySet=new Set(initialValue)
// const mySet=new Set("11122");
const mySet=new Set();
mySet.add('apple');
mySet.add('banana');
mySet.add('orange');
mySet.add('Gawa');
mySet.add('apple');

console.log(mySet.has("banana"));
mySet.delete('banana');
// mySet.delete('apple');
// mySet.clear()

for (const item of mySet) {
    console.log(item);
}

console.log(mySet);



const letters=new Set();
letters.add("a");
letters.add("b");
letters.add("c");
// letters.add()
console.log(letters);

for (const item of letters) {
    console.log(item);
}



// Symbol is a unique and immutable primitive data type 
// introduced in ECMAScript 6(ES6). A symbol is often 
// used as an identifier for object properties to avoid
// potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to 
// be unique. When you create a symbol, it is unique and
// cannot be recreated or changed. This uniqueness ensures
// that symbols will not collide with other property names
// even if they have the same string representation.

const mySymbol=Symbol("name");
console.log(Symbol);
console.log(typeof Symbol);


// comparing symbols
// const mySymbol2=Symbol("name")

// console.log(mySymbol===mySymbol2);

// const obj={};
// obj[mySymbol]="Valu1";
// obj[mySymbol2]="Valu2";
// console.log(obj)

const symbol1=Symbol("name");
const symbole2=Symbol("name");
const Hamza={}
Hamza.age=22

Hamza['gender']='male';
Hamza['gender']='female';
Hamza[symbol1]='Alex'
Hamza[symbole2]='Jhon'
console.log(Hamza)

const basic=Symbol("foo");
console.log(typeof symbol1);
const obj={}
obj[basic]="Hey"
console.log(obj)
for (const symbol in obj) {
     console.log(symbol);
 }
 