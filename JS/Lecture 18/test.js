const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh",

}
// course.courseInstructor
// const {courseInstructor,coursename,price} = course;
// console.table([courseInstructor,coursename,price]);
const {courseInstructor:instructor,coursename,price} = course;
console.table([instructor,coursename,price]);


// JSON format 

// {
//     name:"hitesh",
//     coursename:"js in hindi",
//     price:"free"
// }