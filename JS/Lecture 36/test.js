// these give basic information not give the best feature and not propogation
// document.getElementById("img1").onclick=function(){
//     alert("river clicked")
// }
// document.getElementById("img2").addEventListener("click",function(){
//     alert("image 2 clicked")
// },false);

// type, timestamp, defaultPrevented
// target, toElement,srcElement,currentTarget
// clientX,clientY,screenX,screenY,altkey, ctrlkey, shiftkey, keycode

// false is event bubbling
// document.getElementById("img3").addEventListener("click",function(e){
//     console.log(e);
// },false)

// true is event capturing 

// document.getElementById("img3").addEventListener("click",function(e){
//     console.log(e);
// },true)

// type, timestamp, defaultPrevented
// target, toElement,srcElement,currentTarget
// clientX,clientY,screenX,screenY,altkey, ctrlkey, shiftkey, keycode






// Event Propogation

// Event Bubbling

// document.getElementById("images").addEventListener("click",function(e){
//     console.log("clicked inside the ul");

// },false)

// document.getElementById("img3").addEventListener("click",function(e){
//     console.log("Image3 Clicked");
//     e.stopPropagation();
// },false)

// document.getElementById("images").addEventListener("click",function(e){
//     console.log("clicked inside the ul");
// },true)

// document.getElementById("img3").addEventListener("click",function(e){
//     console.log("Image3 Clicked");
//     e.stopPropagation();
// },true)

document.getElementById("googleLink").addEventListener("click",function(e){
e.preventDefault();
console.log("Google Clicked")
})

document.querySelector("#images").addEventListener("click",function(e){
    console.log(e.target.tagName);
    if(e.target.tagName=="IMG"){
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        // removeIt.remove();
    }
    // console.log(e.target.parentNode);
    // let removeIt=e.target.parentNode;
    // removeIt.remove();
    // removeIt.parentNode.removeChild();

},false);











// attachEvent()
// jQuery
