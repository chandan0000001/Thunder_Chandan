// const user = {
//     name: "rohit",
//     age: 20,
//     email: "negi@gmail.com",
//     amount: 90
// }

// string ke form mein store hoti hai

// {
//   "name": "rohit",
//   "age" : 20,
//   "email": "negi@gmail.com",
//   "amount": 90
// }


// console.log(user.amount)
// console.log(user["name"])
// console.log(user["age"])
// console.log(user["amount"])
// console.log(user.name);

// const user = {
//     name: "rohit",
//     age: 20,
//     email: "negi@gmail.com",
//     amount: 90
// }

// user = null;
// delete user;
// console.log(user);
// garbage collector: Can I delete, should I delete

// creaate a new key: value

// user.adhar = 21030;
// // console.log(user);

// // update the value inside the object
// user.age = 29;

// delete user.email;
// console.log(user)


// const user = {
//     name: "rohit",
//     age: 20,
//     email: "negi@gmail.com",
//     amount: 90,
//     arr: [10,20,30,40],
//     greet: function(){
//         console.log("Hello Ji");
//     },
//     address: {
//      city: "dwarka",
//      pincode: 246149
//     }
// };


// user.greet();
// console.log(user.address.city);
// console.log(user.greet)


// const customer = {
//     name: "Rohit",
//     age: 20,
//     accountNumber: 124554,
//     balance: 40,
//     city: "kotdwar"
// };




// Keys ko print karana hai?
// [ 'name', 'age', 'accountNumber', 'balance', 'city' ]
// console.log(Object.keys(customer))

// [ 'Rohit', 20, 124554, 40, 'kotdwar' ]
// console.log(Object.values(customer))


// keys and values:
// [
//   [ 'name', 'Rohit' ],
//   [ 'age', 20 ],
//   [ 'accountNumber', 124554 ],
//   [ 'balance', 40 ],
//   [ 'city', 'kotdwar' ]
// ]
// console.log(Object.entries(customer));



// const customerkeys = Object.keys(customer);
// // console.log(customerkeys);
// // key = "name"
// for(const key of customerkeys){
//     console.log(key, customer[key] );
// }


// If I have an array, I can run for of loop here

// for(const key of Object.keys(customer)){
//     console.log(key);
// }


// for(const value of Object.values(customer)){
//     console.log(value);
// }

// 2D array
// [["name","Rohit"],["age",20],['accountNumber',12345]]

// [key,value] = ["age",20]
// for(const [key, value] of Object.entries(customer)){
//     console.log(key,value);
// }

// for of loop: array apply


// console.log(Object.keys(customer));


// const obj1 = {name: "Rohit"};
// const obj2 = obj1;

// obj2.name = "mohit"

// console.log(obj1);




// //Objects

// const user = {
//     name:"Chandan",
//     age:20,
//     amount: 3244,
//     state:"Odisha",
//     num:871248142
// }
// console.log(user);

// console.log(user.name);
// //above and below are same 
// console.log(user["name"]);



//from backend data will comes like below  array ke andar object 
// const users = [
//     {
//             name:"Assema",
//             age:19,
//             amount: 33244,
//             state:"Odisha",
//             num:871248142
//         },
//         {
//             name:"Chandan",
//             age:20,
//             amount: 35244,
//             state:"Odisha",
//             num:871248142
//         },
//         {
//             name:"Damyanti",
//             age:20,
//             amount: 324423,
//             state:"Odisha",
//             num:871248142
//         },  {
//             name:"Rohit",
//             age:20,
//             amount: 324,
//             state:"Odisha",
//             num:871248142
//         },
//         {
//             name:"Mohit",
//             age:20,
//             amount: 3244,
//             state:"Odisha",
//             num:871248142
//         },
//         {
//             name:"Chandanx",
//             age:20,
//             amount: 3244,
//             state:"Odisha",
//             num:871248142
//         }
// ]

// console.log(users[0].name);

// function Display(food){
//     console.log(food.name);
//     console.log(food.price);
//     console.log(food.rating);
//     console.log(food.description);
//     console.log(food.image);
// }


// const obj = {
//     name:"Wednesday Bucket",
//     price: 239,
//     rating:4.1,
//     description: "Enjoy this food",
//     image: "https: 123"
// }
// Display(obj);







// function Display(userx){
//         console.log(userx.name);
//         console.log(userx.age);
//         console.log(userx.amount);
//         console.log(userx.state);
//         console.log(userx.num);
//     }
//     //backend se data hamesa array ke sath ata he 
// const users = [
//         {
//                 name:"Assema",
//                 age:19,
//                 amount: 33244,
//                 state:"Odisha",
//                 num:871248142
//             },
//             {
//                 name:"Chandan",
//                 age:20,
//                 amount: 35244,
//                 state:"Odisha",
//                 num:871248142
//             },
//             {
//                 name:"Damyanti",
//                 age:20,
//                 amount: 324423,
//                 state:"Odisha",
//                 num:871248142
//             },  {
//                 name:"Rohit",
//                 age:20,
//                 amount: 324,
//                 state:"Odisha",
//                 num:871248142
//             },
//             {
//                 name:"Mohit",
//                 age:20,
//                 amount: 3244,
//                 state:"Odisha",
//                 num:871248142
//             },
//             {
//                 name:"Chandanx",
//                 age:20,
//                 amount: 3244,
//                 state:"Odisha",
//                 num:871248142
//             }
//     ]
//     //
//     //for of loop  
// for(const x of users){ //here const itirate all data in the array {BUT HOW CONST HANDLE IT }
// //changing the adress 
//     Display(x);
// }


//