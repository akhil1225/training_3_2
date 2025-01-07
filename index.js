var a = 10; //global

let b = 20; //script

const c = 30; //script

function demo(){
    var username = "Akhil";
    let city = "Khammam";
    const salary = "12345";
    console.log(username, city, salary);
}

demo(); 


{
    let p = 1000;
    console.log(typeof(p))
}


/*
commenting in java:
    1. single line : //
    2. multi line : /**/


var username = "Allu Arjun";
let title = 'Super star';
const net_worth = `-50 lakhs`;
console.log(username );
console.log(typeof(username), typeof(title), typeof(net_worth) );

let bool1 = true;
let bool2 = false;

console.log(bool1, typeof(bool1));
console.log(bool2, typeof(bool2));

let p = 23;
let q = 23.24
let t = 10e234
console.log(typeof(p), typeof(q), typeof(t))

let r;
console.log(typeof(r))

let s = null;
console.log(s, typeof(s))