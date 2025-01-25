// let ele = document.createElement("h1");
// ele.innerText="dynamic creation of html elements";
// ele.setAttribute("id", "demo");
// console.log(ele);

// document.body.appendChild(ele);

// let image = document.createElement("img");
// image.src = "./spidey.jpg";
// console.log(image);

// document.body.appendChild(image);

let form = document.querySelector("form");
let uName = document.querySelector("#uName");
let uMail = document.querySelector("#uMail");
let uPass = document.querySelector("#uPass");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("Form Submitted");
   
})