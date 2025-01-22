// console.log(10);
// console.log(20);

// // setInterval(()=>{
// //     document.writeln("MRU");
// // })
// console.log(40);
// console.log(50);

// let p1 = new Promise(()=>{});
// // console.log(p1);

// let p2 = new Promise((resolve, reject)=>{
//     resolve("Success");
// })

// // console.log(p2);

// let p3 = new Promise((resolve, reject)=>{
//     reject("Failure");
// })

// console.log(p3);    

// p2.then((res)=>{
//     console.log(res);
// })

// p2.catch((err)=>{
//     console.log(err);
// })

// p2.finally(()=>{
//     console.log("All Done");
// })

// p3.then((res)=>{console.log(res);}).
//    catch((err)=>{console.log(err);}).
//    finally(()=>{console.log("All Done");})

// console.log("End of Script");

// ! API Fetching

// function fetchUsers(){
//     let x = fetch("https://jsonplaceholder.typicode.com/users")
//     
//     x.then((res)=>{ return res.json();})
//      .then((data)=>{console.log(data);})
//      .catch((err)=>{console.log(err);})
// }

// fetchUsers();

function fetchUsers(){
    let response = fetch("https://jsonplaceholder.typicode.com/photos");

    response.then(res=>{
        // console.log(res);
        // console.log(res.json());
        return res.json().then(data=>{
            console.log(data);
        })
    })
    .catch(err=>console.log(err))
}

fetchUsers();