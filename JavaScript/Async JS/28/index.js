console.log(fetch("text.txt"));

// callback
// new Promise
// async / await

// text method returns promise
// if resolved will return text representation of body
// fetch("text.txt").then(res => res.text())
// .then((data)=> console.log(data))
// .catch(err => console.log(err));


// fetch("text.txt")
// .then((res) => {
//     if(!res.ok) throw Error(res.statusText);
//     return res.text();
// })
// .then((data) => console.log(data))
// .catch((err) => console.log(err));



const result = document.querySelector(".results");
async function  renderData() {
    try {
        const response = await fetch("text.txt");
        if(!response.ok) throw Error(response.statusText);
        const data = await response.text();
        result.textContent = data;

    } catch (error) {
        console.log(error)
    }
}
renderData();