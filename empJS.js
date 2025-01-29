/*  Array of objects where each object contains  empId, empCompany, 
    empSalary and empAddress, where empAddress further contains an object 
    which includes two properties such as empCity, area.*/

    /* Display all these employee datas on the UI through JS */

const empDetails = [
    {
        empId : "2211CS010493",
        empCompany : "Sutherland",
        empSalary : "$ 25000",
        empAddress : {
            empCity : "Hyderabad",
            area : "Maisammaguda"
        }
    },
    {
        empId : "2211CS010519",
        empCompany : "HCL",
        empSalary : "$ 15000",
        empAddress : {
            empCity : "Eluru",
            area : "Dharmajigudem"
        }

    }
]



let empId = document.createElement("p");
let empCompany = document.createElement("p");
let empSalary = document.createElement("p");
let empAddress = document.createElement("div");

let empCity = document.createElement("p");
let area = document.createElement("p");

let table = document.getElementById("myTable")



empDetails.forEach(emp=>{
    let store = document.getElementById("store");
    store.innerHTML += `
    <tr>
        <td>${emp.empId}</td>
        <td>${emp.empCompany}</td>
        <td>${emp.empSalary}</td>
        <td>${emp.empAddress.empCity}</td>
        <td>${emp.empAddress.area}</td>`    
})



