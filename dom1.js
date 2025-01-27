// let ele = document.createElement("h1");
// ele.innerText="dynamic creation of html elements";
// ele.setAttribute("id", "demo");
// console.log(ele);

// document.body.appendChild(ele);

// let image = document.createElement("img");
// image.src = "./spidey.jpg";
// console.log(image)

// document.body.appendChild(image);

// let form = document.querySelector("form");
// let uName = document.querySelector("#uName");
// let uMail = document.querySelector("#uMail");
// let uPass = document.querySelector("#uPass");

// form.addEventListener("submit", (form)=>{
    
//     console.log("Form Submitted");
//     form.preventDefault();
   
// })

// let mainELe = document.createElement("div");
// mainELe.setAttribute("id", "mainBlock");

// console.log(mainELe);

// let topEle = document.createElement("div");
// topEle.setAttribute("id", "topBlock");
// console.log(topEle);

// let image = document.createElement("img");
// image.src = "./spidey.jpg";
// image.width = "300";
// image.height = "300";
// image.style.objectFit = "cover";

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");
// console.log(bottomEle);
// let h1 = document.createElement("h1");
// h1.innerText = "SPIDERMAN"

// let btn = document.createElement("button");
// btn.innerText = "View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainELe.appendChild(topEle);
// mainELe.appendChild(bottomEle);

// document.body.appendChild(mainELe);

let form = document.querySelector("form");
let userName = document.getElementById("userN");
let userPassword = document.getElementById("userP");

let gender = document.getElementsByName("Gender");
// console.log(gender);

form.addEventListener("submit", event=>{
    event.preventDefault();
    console.log("Form Submitted");
    let un = userName.value;
    let up = userPassword.value;
    let gender = ""

    for( let i =0; i<gender.length-1;i++){
        if(gender[i].checked == true){
            gen += gender[i].value
        }
    };

    let userDetails ={
        username: un,
        password: up,
        gen: gender
    }

    console.log(userDetails);
    sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
})

