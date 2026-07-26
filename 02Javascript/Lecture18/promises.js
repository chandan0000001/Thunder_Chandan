

// // pending    fullfill   reject 
// const p1 = fetch("https://api.github.com/users?per_page=20");
// // console.log(p1);// p1 pending state 


// //promise consume 
// const p2 = p1.then((response)=>{
//    return response.json(); //p2 pending state it retur promise so we cant console.log(p2);
// })

// p2.then((datax)=>{
//     console.log(datax)
// })




// //cahaining promises 
// fetch("https://api.github.com/users?per_page=20")
// .then((Response)=>{
//     return Response.json();
// })
// .then((datay)=>{
//     console.log(datay);
// })








// fetch("https://api.github.com/us?per_page=20")  //wrong url 
// .then((Response)=>{
//     if(!Response.ok){
//         throw new Error("Unable to fetch the data MG");
//     }
//     return Response.json();
// })
// .then((datay)=>{
//     console.log(datay);
// })
// .catch((error)=>{
//     console.log(error);
// })


// //it always run read this deep in backend 
// .finally(()=>{
//     console.log("I am final now call your girlfriend");
// })




// how to create promise 
const p1 = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("Hello man ");
    }, 1000);
    // reject("Error Occured ")

})
console.log(p1)  // Promise { <pending> }                                                             


// p1.then ((res)=>{
//     console.log(res);
// })

// .catch((error)=>{
//     console.log(error);
// })


















