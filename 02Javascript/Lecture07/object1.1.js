// const user = {
//     name:"chandan",
//     age:20,
//     email: "kumar@gmail.com",
//     amount:91923,
// }
// console.log(user.name);
// console.log(user.age);
// console.log(user["name"]);
// // console.log(user[age]); // this is not allowed  because here all key are in string format 


// const user = {
//         name:"chandan",
//         age:20,
//         email: "kumar@gmail.com",
//         amount:91923,
//     }

    // // // create a new key value 
    // // user.adhar = 32237894273;
    // // console.log(user);

    // // //updat the value 
    // // user.age=233;
    // // console.log(user);


    // delete user.email;
    // console.log(user);


    //delete the complete the object 
    // user = null; //error will kiss you 
    // user = {}; //erro will kiss you 
    // delete user; //nahi hua delete 

    // console.log(user);



// const user = {
//     name:"chandan",
//     age:20,
//     email: "kumar@gmail.com",
//     amount:91923,
//     arr : [10,20,2020304,4055],
//     greet: function(){
//         console.log("I am inside the Object")
//     }
// }
// //inside function 
// console.log(user.greet);
// //call to function 
// user.greet()

// console.log(user);





// const user = {
//     name:"chandan",
//     age:20,
//     email: "kumar@gmail.com",
//     amount:91923,
//     arr : [10,20,2020304,4055],
//     adress: {
//         city:"Odisha",
//         pincode: 712873
//     },
//     greet: function(){
//         console.log("I am inside the Object")
//     }
// }

// console.log(user.adress.city);









// const customer = {
//     name:"chandan",
//     age:23,
//     accountNumber:8234194,
//     balance:328419,
//     city:"Odisha"
// };
//only keys print 
// console.log(Object.keys(customer)); //[ 'name', 'age', 'accountNumber', 'balance', 'city' ]

// console.log(Object.values(customer))  //[ 'chandan', 23, 8234194, 328419, 'Odisha' ]


//both keys and values 
// console.log(Object.entries(customer));
// [
//     [ 'name', 'chandan' ],
//     [ 'age', 23 ],
//     [ 'accountNumber', 8234194 ],
//     [ 'balance', 328419 ],
//     [ 'city', 'Odisha' ]
//  ]


// const customerKeys = Object.keys(customer);
// console.log(customerKeys);  //[ 'name', 'age', 'accountNumber', 'balance', 'city' ]

// for(const x of customerKeys){
//     console.log(x);
//     //  name
//     // age
//     // accountNumber
//     // balance
//     // city
// }

// for(const x of customerKeys){
//     console.log(x,customer[x]); 
// // name chandan
// // age 23
// // accountNumber 8234194
// // balance 328419
// // city Odisha 

// }



// const customer = {
//     name:"chandan",
//     age:23,
//     accountNumber:8234194,
//     balance:328419,
//     city:"Odisha"
// };

// for (const x of Object.entries(customer)){
//     console.log(x);
// // [ 'name', 'chandan' ]
// // [ 'age', 23 ]
// // [ 'accountNumber', 8234194 ]
// // [ 'balance', 328419 ]
// // [ 'city', 'Odisha' ]
// }




//for of loop always applied on array 




// const obj1 = {name:"Chandan"};
// const obj2 = obj1;
// obj2.name="Rohit";
// console.log(obj1); //{ name: 'Rohit' }



// const user = {
//     name: "Chandan",
//     age:23,
//     adress:"Odisha",
//     amount: 2341111
//     }
//     console.log(user);
//     user.name= "Dipsa";
// console.log(user);


// const user= {
//     u1: "Ashrita",
//     u2:"Dipsa",
//     u3:"chandan Maharana",
//     u4:"Bibek",
//     is_pemium_member : false, // keys with special charactr must be in qutes;
//     }
//     console.log(user);




// const book = {author:"chandan",age:23,amount:123412}
// book.author = "Kiran";
// book.age = 312;
// console.log(book);

// const book = {authotr: "Bibek"}
// delete book.authotr;
// console.log(book)
// const book1 = {author:"chandan",age:23,amount:123412}
// delete book1.age;
// console.log(book1);