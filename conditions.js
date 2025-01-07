// if(false){
//     console.log("This is false block");
// } else {
//     console.log("This is the true block");
// }

// let isAdult = 20       ;

// if(isAdult > 18){
//     console.log("He is an adult");
// } else{
//     console.log("he is not an adult");
// }

// isAdult > 18? console.log("She is a major") : console.log("She is a minor");

let day = Number(prompt("Enter the day value: "))
// if (day == 1){
//     console.log("Sunday");
// } else if (day == 2){
//     console.log("Monday");
// } else if (day == 3){
//     console.log("Tuesday");
// }else if (day == 4){
//     console.log("Wednesday");
// } else if (day == 5){
//     console.log("Thursday");
// } else if (day == 6){
//     console.log("Friday");
// } else if (day == 7){
//     console.log("Saturday");
// } else{
//     console.log("Invalid input");
// }

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2: 
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6: 
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input");
}

