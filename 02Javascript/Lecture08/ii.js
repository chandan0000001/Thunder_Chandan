// IIFE

// (function hello(){
//     console.log("Hello Ji");
// })();

// ()()



// javascript function ke andar kisi dusre function ko pass kar sakte hai
// Callback function


// function greet(){
//     console.log("Hello Ji");
// }

// // callback = greet

// function meet(callback){
//     console.log("Hello Meet");
//     callback();
// }

// // hello meet, hello ji
// meet(greet)




// function greet(){
//     console.log("Hello Ji");
// }

// function morning(){
//     console.log("Hello Good Morning");
// }


// function meet(Callback){
//     console.log("Hello Meet");
//     Callback();
//     console.log("I am done")
// }

// // Hardcode kar diya hai
// // "Hello Meet"
// // "Hello Ji"
// // "I am done"

// // // "Hello Meet"
// // "Hello Good Morning"
// // "I am done"
// meet(greet);
// meet(morning);








// IIFEE function 
//it call 
// (function hello(){
//     console.log("Hello from God");
// })();




// //Inside js you can pass another function 

// // But why need ? 
// //below shows the call back function 
// function greet(){
//     console.log("Hello ji");
// }
// //callback = greet 
// function meet(callback){
//     console.log("Hello Meet");
//     callback();
// }
// meet(greet);






//AGAIN 
//WE NEED THIS TYPE 
//Hello Meet 
//Hello ji
//I am done 
function hello(){
    console.log("Hello ji");
}
function meet(callback){
    console.log("Hello Meet");
    //We need flexible so Don't to be hardCode 
    callback();
    console.log("I am done ")
}
meet(hello);