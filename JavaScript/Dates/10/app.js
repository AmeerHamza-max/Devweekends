const date=new Date();
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toDateString());
date.setDate(date.getDate()+1);
date.setDate(date.getDate()+1);
console.log(date.toLocaleDateString()); 


