// console.log(this);

// const user = {
//     name: "Rohit",
//     greet: function(){
//         console.log(this);
//     }
// }

// user.greet();

// console.log(this) //it return empty object 

const user = {
    name: "Chandan" ,
    age: 32,
    greet:  function(){
         console.log(this)  //{ name: 'Chandan', age: 32, greet: [Function: greet] }
    }
    
}
user.greet();