const coding = ["Js","ruby","java","python","cpp"];
// const values = coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(values);//forEach loop returns undefined

// const values1 = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values1);

//For each does not return anything but filter returns something

const myNums = [1, 2, 3, 4, 5, 6,7,8,9,10];

// const newNums=myNums.filter((num)=>{
//     return num > 4;
// })
// console.log(newNums);
// const myNums = [];

// const newNums=myNums.filter((num)=>{
//     return num > 4;
// })
// console.log(newNums);
// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num);

//     }
// })
// console.log(newNums);

const books = [
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    edition: 1993
  },
  {
    title: "Atomic Habits",
    genre: "Self-Help",
    publish: 2018,
    edition: 2022
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: 2017
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    publish: 1997,
    edition: 2014
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    publish: 1925,
    edition: 2004
  },
  {
    title: "Think and Grow Rich",
    genre: "Finance",
    publish: 1937,
    edition: 2011
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    publish: 1997,
    edition: 2022
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: 2012
  },
  {
    title: "You Don't Know JS",
    genre: "Programming",
    publish: 2015,
    edition: 2020
  },
  {
    title: "The Power of Now",
    genre: "Self-Help",
    publish: 1997,
    edition: 2018
  }
];

// const userBooks = books.filter((bk)=>{
//     return bk.genre==="Finance";
// })

const userBooks = books.filter((bk)=>{
    return bk.publish > 2000 && bk.genre=="Finance";
})

console.log(userBooks);

