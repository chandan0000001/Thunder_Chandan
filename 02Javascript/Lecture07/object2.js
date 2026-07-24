// const customer = {
//     name: "Rohit",
//     age: 10,
//     value: 70,
//     city: "kotdwar",
//     arr: [10,20,30],
//     address: {
//         pincode: 246149
//     }
// }


// for( let key in  customer){
//     console.log(key);
// }
// DOnt use this method, it is not recommendad
// 

// const {age: ageName, value: valueName} = customer;

// console.log(ageName,valueName);

// const customer2 = {...customer};
// customer2.name = "Mohan",
// customer2.address.pincode = 2;
// customer2.arr.push(54);
// console.log(customer);


// const customer2 = structuredClone(customer);


// customer2.arr.push(3);
// console.log(customer);




const customer = {
    name: "chandan",
    age: 10,
    value: 70,
    city: "Odisha",
    arr: [10,20,30,343,535,234],
    address: {
        pincode: 246149
    }
}

// const {age,value} = customer;
// const {age:ageName,value:valueName} = customer;
// console.log(age,value);
// console.log(ageName,valueName)





// //spread operator 
// const customer2 = {...customer};
// customer2.name = "Deepa";
// console.log(customer);
// console.log(customer2);
// // customer he
// // {
//     name: 'chandan',
//     age: 10,
//     value: 70,
//     city: 'Odisha',
//     arr: [ 10, 20, 30, 343, 535, 234 ],
//     address: { pincode: 246149 }
//   }

// customer2 he 
//   {
//     name: 'Deepa',
//     age: 10,
//     value: 70,
//     city: 'Odisha',
//     arr: [ 10, 20, 30, 343, 535, 234 ],
//     address: { pincode: 246149 }
//   }


// customer2.arr.push(32);  //But object not worked they are must be same for all 
// console.log(customer);
// console.log(customer2);


// const customer2 = structuredClone(customer);
// customer2.arr.push(233);
// console.log(customer);
// console.log(customer2);
// // {
//     name: 'chandan',
//     age: 10,
//     value: 70,
//     city: 'Odisha',
//     arr: [ 10, 20, 30, 343, 535, 234 ],
//     address: { pincode: 246149 }
//   }
//   {
//     name: 'chandan',
//     age: 10,
//     value: 70,
//     city: 'Odisha',
//     arr: [
//        10,  20,  30, 343,
//       535, 234, 233
//     ],
//     address: { pincode: 246149 }
//   }





// dont use for in loop in object 