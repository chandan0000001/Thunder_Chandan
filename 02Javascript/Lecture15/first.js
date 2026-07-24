// console.log("Start");


// async function github(){
//     const response = await fetch("https://api.github.com/users?per_page=20");
//     const data =  await response.json();
//     // Body ke andar data hai, usko read karke js object convert karo

//    console.log(data);
// }

// github();

// // UI ke andar display

// // code: header ko display
// // code: Footer ko display
// console.log("End");

// // Promise<pending>


// // const jsObject = {
// //     name: "Rohit",
// //     age: 20,
// //     logIn: true,
// //     a: undefined,
// //     b: function(){

// //     }
// // }


// // const jSon = `{
// //     "name":"Rohit",
// //     "age":20,
// //     "login":true,
// //     "arr": [20,11,70]
// // }`

// // string, number, boolean, null, object, array
// // String hai


// // const obj = {
// //     name: "Rohit",
// //     age: 20
// // }


// // const jsObject = {
// //     name:"Rohit",
// //     age: 20,
// // }

// // // jsobject --> JSON
// // const a = JSON.stringify(jsObject);

// // // "name"
// // // JSON --> jsObject
// // const b = JSON.parse(a);

// // console.log(b);


// // {
// //     "name":"Rohit",
// //     "age":20
// // }





// async function github(number=20) {
    
//     const response = await fetch(`https://api.github.com/users?per_page=${number}`);
//     const data =  await response.json();

//     const root = document.getElementById('root');
//     root.textContent = "";

//     for(const user of data){
//         // div create karenge
//         // Image
//         // name
//         const container = document.createElement('div');
//         container.style.textAlign = "center"
//         container.style.padding = "5px"

//         const img = document.createElement('img');
//         img.src = user.avatar_url;
//         img.style.height = "200px";
//         img.style.width = "200px";

//         const name = document.createElement('p');
//         name.textContent = user.login;

//         container.append(img,name);

//         root.append(container);
//     }
// }

// github();

// const search = document.querySelector('button');
// const input = document.querySelector('input');

// input.addEventListener('input',()=>{
//     const number = Number(input.value);
//     github(number);
// })


// search.addEventListener('click',()=>{
//     const number = Number(input.value);
//     github(number);
// });




// console.log("start");
// const response = await fetch("https://api.github.com/users?per_page=20");
// const data = await response.json(); //JSON : javascript Object Notaion here you can pass the data in the form of string 
// // in JSON it support string number boolean null object array 
// console.log(response);
// console.log(data);
// console.log("end");




// // lets discuss 
// // if frontend and backkesnd in js then why need JSON  ??
// const obj = {
//     name: "Chandan",
// }
// //how can yuou read above ??  if you convert in the string then we can conver t into binary 
// const objx = `{
//     name: "Chandan",
// }`


// const jsObjt = {
//     name:"chandan",
//     age:29,
// }
// const a = JSON.stringify(jsObjt); //obj to json
// console.log(typeof(a));
// console.log(a);
// const b = JSON.parse(a); //json to obj
// console.log(typeof(b))
// console.log(b);

















// console.log("start");
// const response = await fetch("https://api.github.com/users?per_page=20");
// const data = await response.json(); //JSON : javascript Object Notaion here you can pass the data in the form of string , .json converts into the JS object 
// // in JSON it support string number boolean null object array 
// console.log(response);
// console.log(data);
// console.log("end");


//Promise it is a Object  ye promise kartta he data laykee dunga 
//1.Pending  , 2.FullFill  ,  3.rejected 

//js Is a single threaded  asynchronous language it perform ata time single task 
//

//we SAW the all are synchronise so we need to make it asynchoronise 
//watch the flow of the code 


console.log("hello");
async function github(){
    const response = await fetch ("https://api.github.com/users?per_page=20");
    const data = await response.json();
    console.log(data);

}
github();
console.log("Bye");
