// Primitive data type

// let firstNumber = 10;
// let secondNumber = firstNumber;
// // let thirdNumber = firstNumber;

// secondNumber = 20;

// console.log(firstNumber,secondNumber);


// let obj1 = {
//     name:"Rohit",
//     age:10
// }

// let obj2 = obj1;

// obj2.name = "Mohan";
// console.log(obj1);


// let a = "Rohit";
// let b = "Rohit";



// console.log(a==b);


// Non Primitive data compare on the basis of reference

// let obj1 = {
//     name: "Rohit",
//     age: 20
// }


// let obj2 = {
//     name: "Rohit",
//     age: 20
// }

// obj2.name = "Mohan";


// console.log(obj1)

// let a = 20;
// a = 30;
// console.log(a);

// const a = 10;
// const b = a;

// b = 30;

// console.log(a==b);

// const a = {
//     name: "Rohit",
//     age: 20
// }


// // a.age = 10;

// a = {
//     name,"Sohan",
//     age: 20,
// }

// console.log(a);

// let firstNum = 10 ;
// let secondNum = firstNum;
// secondNum = 20;
// console.log(firstNum,secondNum);
// primitive data type are  copy_by_value/

// Not primitive -> copy by refrace 


// let obj1 = {
//     name : "Hello",
//     age : 12
// }
// let obj2 = obj1 

// obj1 and obj 2 both are point to the same data not like primitive data 
//objective are too much heavy so copy refrance are do them usually they store the adress 
// obj2.name = "Chandan";
// console.log(obj1);


// "ecma" create the rukes for the js 










// let a = 10;
// let b = 20;

// let s = "Chandan";
// let x = "chandan";
// console.log(a==b);
// console.log(s==x);





//but the non premitive  data compare the bassis of refrance adress 
// let obj1 = {
//     name:"Chandan",
//     age: 23
// }
// let obj2 = obj1;
// console.log(obj1==obj2);





// let obj1 = {
//     name:"Chandan",
//     age: 23
// }
// let obj2 = {
//     name:"Chandan",
//     age: 23
// }
// console.log(obj1==obj2);

// //it return false because of they have different adress of each object 
// //let obj1 adreess is 2839     obj2 adress is 8338
// // so  (2839==8338)  which is false






// Primitive data type are IMMUTABLE 
// let a = 10 
// a = 20 
// here a point to where 10 exist 
// another a is point to the 20(new memory location ) so previous 10 is not removed there 
//same as per the string this thigs was occoured 



// const a = 12;
// const b = 29;
// console.log(a==b);


// const a = {
//     name : "Chandan",
//     age : 72
// }
// a.age = 32; // here the value got reassigned  in object we focous on adress // adress pe jaake jo value he usse change karrnna he 
// console.log(a);


//prebloaem 
//Below we decied to change the refrance so it will kisss you with error 
// const b = {
//     name:"Hello Baby",
//     age : 32,
// }
// b = {
//     name:"FOX",
//     age : 23,
// }
// console.log(b);


