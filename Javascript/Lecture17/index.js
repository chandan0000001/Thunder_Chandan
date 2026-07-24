// const obj1 = {
//     name: "Rohit",
//     age: 20,
//     city: "dwarka",
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// }



// const obj2 = {
//     balalnce: 70
// }
// // custom?
// obj2.__proto__ = obj1;

// console.log(obj2.greet());

// // console.log(window);




// // const arr = [10,20,30];

// // arr.push(50);


// // console.log(obj1.hasOwnProperty('name'));
// // console.log(obj1.toString());


const obj1 = {
    name:"Chandan",
    age:20,
    city:"Odisha",
    greet:function(){
        console.log(`hello ${this.name}`);
    }
}

console.log(obj1.greet());
console.log(obj1.hasOwnProperty('name'));
console.log(obj1.toString());


const obj2 = {
    balance:213

}
// console.log(obj2.name); //undefined
// console.log(obj2.greet); 

// to acess all pe=roperty of obj1 by obj2 
obj2.__proto__ = obj1;
console.log(obj2.name); 
console.log(obj2.greet); 



