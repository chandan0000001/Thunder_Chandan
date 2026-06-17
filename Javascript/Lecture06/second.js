// It store the heterogenous type of data: It can store anytype of data inside it
// let user = [10,60,"Rohit",true];

// console.log(user);

// can i update the value inside the array

// user[1] = "Anjali";

// console.log(user);

// let num = [10,20,30,40,50];


// push(Insert element in the array at the end) or pop(delete element from the end of array)

// num.push(30,101,24,18);

// num.pop();
// num.pop();

// console.log(num);


// let num = [10,20,30,40,50];

// delete or insert element at the start of an array

// unshift: Insert element at the beginnig of the array
// num.unshift(11,22,37);

// delete element at the start
// num.shift();
// console.log(num);

// push, pop, unshift, shift

// const arr = [10,20,30]

// console.log(typeof arr);


// for of Loop ka use bhut karte hai

// let num = [10,20,30,40,50];

// for(let x of num){
//     console.log(x);
// }

// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }


// let marks = [10,20,30,40,50,60,70];

// const a = marks.slice(2,4);
// second index, 4th index(not included)
// console.log(a);
// console.log(marks);

// slice doesnt change the original array, it just create a new copy of the particular portion and give it back

// const a = marks.splice(2,4);
// console.log(a);
// console.log(marks);
// let marks = [10,20,30,40,50,60,70];
// // a = [30,40,50,60]
// // marks = [10,20,17,19,70]
// // second index, total 4 element
// const a = marks.splice(2,4,17,19);
// console.log(a);
// console.log(marks);

// splice return a new array from particular index, second: total element

// use case mein hum aayenge...


// let marks = [10,20,30,40,50,60,70];

// starting element: splice: Delete, insert karane ke liye kar sakte hai
// if I have to delete 30 from the array
// marks.splice(2,1)

// console.log(marks);

// if I have to inser 2 element from second index: 41 , 91
// marks.splice(2,0,41,91);
// console.log(marks)




// It store the heterogenous type of data: It can store anytype of data inside it
// let user = [10,232,434.34,"Chandan",true];

// console.log(user);
// user[1] = "chandan";
// //push(Insert element at the end ) and pop delete element at the end 
// console.log(user);


// let num = [10,20,30254,64,32,5];
// //push(Insert element at the end ) and pop delete element at the end 
// num.push(283);
// console.log(num);
// num.pop();
// console.log(num);


// let num = [10,20,30254,64,32,5];
//delete start elemenrt an insert at start 
//unshift insert lelement at the araay
// num.unshift(20);
// // console.log(num);
// // num.unshift(23,40);
// console.log(num);

// //shift for delete 
// // num.shift();

// console.log(num);


// const arr = [39,32,4,23,45,56];
// console.log(typeof(arr));









//For of loop we use too much 

// let num = [13,24,53,64,2,546,6];
// for(let x of num){
//     console.log(x);
// }










// let marks = [10,20,0,4,23,43,35,546,76,3,39];
// // const a = marks.slice(1,3);
// // console.log(a);
// // slice doesnt change the original array, it just create a new copy of the particular portion and give it back
// console.log(marks);
// const b = marks.splice(2,4,89,90,9);
// console.log(b);
// console.log(marks); 
// //cplice return a array from a particular index  and change the orginal array  and     that " 80 90 9 "  also be added that plce





// let marks = [10,20,30,40,50,60,70];
// // //delete 30 from array
// // marks.splice(2,1); //second index pe jao 1 element ko delete karo 
// // console.log(marks);

// //If i have to inster 2 elements from secondd index 41 , 91

// marks.splice(2,0,41,91); //go second index 0 element delete and then add 41 and 91
// console.log(marks);



