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

let x = (a, b) => {return a*b}
console.log(x(5,5));

let y = (a, b) => a+b;
console.log(y(100, 200));