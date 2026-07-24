const myObject = {
    js:'Javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(key);
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java"];

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map();
map.set('USA',"United States of America");
map.set('IN',"India");
map.set('fr',"France");
// console.log(map);

for (const key in map) {
    console.log(key);
}