// what is function, why do we need it

// function greeting(){
//     console.log("Hello World");
// }


// greeting();


// function addNumber(num1,num2){
// //    console.log(num1+num2);
//     return num1+num2;
// }


// const answer = addNumber(2,3);
// console.log(answer);


// function addNumber(num1,num2,num3=0,num4=0){
    
//     return num1+num2+num3+num4;
// }


// console.log(addNumber(3,11));
// console.log(addNumber(4,7,8))
// console.log(addNumber(4,7,8,16))


// rest operator
// arr = [2,1,4,21,4,15,12,1234,123,53,12,532,123,54,1]

// function addNumber(...arr){
//   let sum = 0;
//   for(const num of arr){
//     sum+=num;
//   }

//   return sum;
// }



// console.log(addNumber(2,1,4,21,4,15,12,1234,123,53,12,532,123,54,1));


// let arr = [10,20,30,40,50,60];

// // spread operator
// const arr2 = [...arr];

// // console.log(arr2)
// // rest operator
// const [first, seccond, ...third] = arr;
// console.log(first,seccond, third);


//  second method to create function

// const greet = function(){
//     console.log("Hello Ji");
//     return 10;
// }

// const answer = greet();
// console.log(answer);


// const addNumber = function(num1,num2){
//     return num1+num2;
// }


// console.log(addNumber(2,3))





// Third type se hum function ko banate: Ye aapse jaada use karoge
// arrow function  ()=>


// const greet = ()=>{
//     console.log("Hello ji");
// }


// greet();
// const addNumber = (num1,num2)=> {
//    return num1+num2;
// }


// function bhi nahi dikh rha hai

// const addNumber = (num1,num2) => num1+num2;

// const answer = addNumber(2,3);

// console.log(answer);


// const square = (num) => num*num;

// When you have only one parameter, no need to use () 
// Backend: Normal Function

// Code: Readabale:
// const square = num => num*num;


// console.log(square(8))

// ()=>{
    
// }

// const user = ()=> ({name:"Rohit", age:20})
    



// console.log(user());




// function addNumber(x,z){
//     console.log(`Your sum is ${a+b}`)
// }
//  function retaddNumber(c,v){
//     return c+v;
// }

// let a = 3;
// let b = 2;
// addNumber(a,b)
// const answer = retaddNumber(a,b)
// console.log(answer)

//  function retaddNumber(c,v,d){
//         return c+v+d;
//     }
// console.log(retaddNumber(4,5,6));
// // 15
// console.log(retaddNumber(4,5)); // here another number taken as undefined 
// NaN


// //For optimal 
// //use spred operator we need to brek number by number 
// //arr = [2,4,5,6,7,43,3,2,4]
// function add (...arr){
//     let sum =0;
//     for (let x of arr){
//         sum= sum + x;
//     }
//     return sum;
// }
// console.log(add(23,34,5256,5672,34,13235,563457,3562,6,3));






//IMPORTANT 
// let arr  =[12,2345,346,36573,5,3456];
// // arr exist karta he so khud ko kholyega and arr2 pe chalajaygega arr se  ye he spread operator 
// const arr2 = [...arr];
// console.log(arr2); //[ 12, 2345, 346, 36573, 5, 3456 ]




// // let arr  =[12,2345,346,36573,5,3456];
// // //rest operator 
// // //third exist nahi karta yaha pe so baki jo element bacheyenge first and second ko chodd ke ho sab third pe ayenge 
// // const [first,seccond,...third] = arr ;
// // console.log(first,seccond,third);  //12 2345 [ 346, 36573, 5, 3456 ]






// //Second function 
// const greet = function(){
//     console.log("Hello");
// }
// greet();




//Arrow Functions (ES6 - The Modern Way)    ()=>{ }
// const add = (a,b)=> {
//     return a+b;
// }
// console.log(add(23,24));

// //Here mul hold the function 
// const mul = (a,b)=> {
//     return a*b;
// }
// // here mulx hold the function 
// const mulx = (x,y)=> x*y;

// console.log(mul(32,43));
// console.log(mulx(234,11));




//determine the square
// // const num = (a)=> a*a; //We can write below type 
// const num = a=> a*a;
// console.log(num(5,9))



// const user = ()=> {
//     return {
//         name:"Chandan",
//         age : 23,
//     }
// }
// console.log(user());
// console.log(typeof(user()));


// let arr = [32,4,22,41,4145,43];
// const ans =  arr((a,b)=>{a-b});
// console.log(ans);


//Spread: Unpack the array into individual elements
// let arr1 = [1,24,341,234,56]
// let arr2 = [4,56,73,134,66]
// const arr = [...arr1,...arr2];
// console.log(arr);


const person = {name: "Sabat" , age: 83};
const UpdatePrson = {...person , city: "Puri"};
console.log(UpdatePrson);
console.log(person);