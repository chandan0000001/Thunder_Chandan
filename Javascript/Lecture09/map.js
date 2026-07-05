
// const arr = [10,20,40,73,18];

// const newArr = arr.map((num)=> num*5);

// console.log(newArr);


// // reducer function



// const arr = [10,20,40,73,18];
// const newArr = arr.map((num)=> num * 5);
// console.log(newArr);


// const arr = [1,3,2,4,4,8,9,32,11,3,5,7,3.6];
// const newArr = arr.map((x)=>{ return x*5});
// console.log(newArr);


// // Map deep
// //create a map 
// const xmap = new Map();
// //create user map 
// const usermap = new Map([
//     ["name","Chandan"],["age",13],["accNo",3456765345]
// ]);
// //for itration use for..of loop 
// //below the x and y is the key and value 
// for(const [x,y] of usermap) {
//     console.log(`${x} = ${y}`)
// }





//curd Operation On map 
// .set(key, value): Adds or updates a key-value pair. Returns the `Map`, so you can chain it.
// .get(key): Retrieves the value for a given key. Returns `undefined` if the key doesn't exist.
//.has(key):Checks if a key exists. Returns `true` or `false`.
// .delete(key): Removes a key-value pair.
// .clear(): Removes all key-value pairs.
const xdata = new Map();
let user1 = {name: "chandan"};
let user2 = {name: "bikash"};
let user3 = {name: "Susant"};
let user4 = {name: "Ashu"};
//.set
xdata.set(user1 , {age:23});
xdata.set(user2 , {age:28});
xdata.set(user3 , {age:26});
xdata.set(user4 , {age:21});
console.log(xdata);
//.get //it return whihc is added by the .set
console.log(xdata.get(user3));
// .delete
xdata.delete(user4);
console.log(xdata);
// .clear used for remove all information in the map
xdata.clear()
console.log(xdata);