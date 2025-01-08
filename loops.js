// for (let i = 1; i<= 10; i++){
//     if (i%2==0){
//         console.log(i+" is an even number");
//     } else{
//         console.log(i+" is an odd number");
//     }
// }   
// let n = parseInt(prompt("Enter number for factorial: "))
// let prod = 1;
// let i = 1
// while (i<=n){
//     prod *= i;
//     i++;
// }

// console.log("The factorial of "+n+" is: "+prod);   
// document.writeln("The factorial of "+n+" is: "+prod);   

let n = parseInt(prompt("Enter number for factorial: "))

for(let i = 1; i<=n; i++){
    if(n%i==0){
        console.log(i+" is a factor of "+n);
    }
}