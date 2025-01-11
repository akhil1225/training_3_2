// function demo(){
//     console.log("Function is executing...");
// }

// demo()

// let a = 10; // in a function, a would be called a paramenter and 10 would be called a argument
// function add(a,b){
//     console.log(a+b);
// }
// add(5, 6)
// add(8,9)

// let x = function(){
//     console.log("This is an anonymous function that is being called anonymously");
// }
// x()

// let y = (a, b) =>  console.log("This is an arrow function"); // replace () with _ if have no params
// y()

// let x = _ => console.log("Arrow function") //replace _ with () if any parameters are neeeded.
// x()

// let x = (a, b) => {return a*b}
// console.log(x(5,5));

// let y = (a, b) => a+b;
// console.log(y(100, 200));

// function hof(a){
//     return a;
// }
// let x = hof(function(){return  "This is a callback function"});
// console.log(x)

// let users = ["Manoj", "Asif", "Varshith", "Tanuja"]

// users.map(function myFunc(user){ // can either be an anonymous function or an arrow function...
//     console.log(user);
// })

// var a = 10;
// let b = 45;
// function x(){ 
//     var user = "Koushik";
//     let company = "CongniFyz";
//     const sal = "35000.00";
//     console.log(user);
//     console.log(company);
//     console.log(sal);
//     console.log(a, b);
// }
// x();

// function p() {
//     let a = 20;
//     let b = 30;
//     function y(){
//         let p = "js";
//         let q = "ReactJS";
//         console.log(p, q);
//         function z(){
//             const username = "Akhilendra";
//             console.log(username);
//         }
//         z() 
//     }
//     y()
//     console.log(a, b);
// }

// p();

function x(){
    let a = 10;
    const b = 20;
    console.log(a, b);
    function y(){
        let p = "js";
        var q = "ReactJS";
        console.log(p, q);
        function z(){
            const username = "Akhil";
            console.log(username);
            console.log(a);
            console.log(q);
        }
        z()
    }
    y()
}
x()

