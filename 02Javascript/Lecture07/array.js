// Homework: sorting function , how does it work?

// const names = ["Rohit", "Mohan", "Sohan","Yash","Rajat", 'rohit'];

// Ascii table: R as r: A: 65 B; 66 ,   a: 97
// sort: ascending order 

// names.sort();
// names.reverse();

// console.log(names)


// const num = [10,20,7,101,23,78,4];
// ["10","20","7","101","23","78","4"]
// it is considering each element as string by default
// "10" , "4"
// num.sort();
// 4 7 10 20 23 78 101

// ascending order
// num.sort((a,b)=>a-b);
// Implement kiya hoga: 
// descending order:
// num.sort((a,b)=>b-a);
// console.log(num);


// const num = [10,20,7,101,23,78,4];
// // string ke jaise hur ek chej ko treat kar rha hai?
// num.sort();

// const arr = [10,"Rohit",true,98,"rohan",null,{name:"Rohit",age:20}];

// arr.sort();
// Hur ek ko string mein convert kar dunga, uske baad sort karunga....
// ["10","Rohit","true","98","rohan","null"]
// console.log(arr);


// const name = ["Chandan","Mohon", "Rohit","Dipsa" ,"Damyanati" , "chandan"];
// //it follows ascaii value while sorting
// console.log(name);
// name.sort();
// console.log(name)
// name.reverse();
// console.log(name)



// let num = [10,20,3,4,5,5,2,4,5,2,24,5,562,3,2]
// num.sort();
// //it doenot consider them as a string they consider as a string it compare like  from 101 -> "1"  "0"   "1"
// console.log(num);
// //if we want our particular result then we use below arrow funcgion 

// num.sort((a,b)=>a-b);
// // a = 10 
// //b = 20
// //10-20 = -10  // if ans is negative then a will be first before b 
// //  if ans is positive then b will be first before a 
// console.log(num);

// //for decending oder
// num.sort((a,b)=>b-a);
// console.log(num);


//But why it takes string ?  
//because arry in contain all types of value (num , bool , ob etc...)  so for internal optimization they treated as a string they apply sort or any kind of opration 










