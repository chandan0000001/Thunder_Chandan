// //IIFE function 
// (function hello(){
//     console.log("hello");
// })();


// create function then call it agin this amazing function 




//another is one  in js function ke andanr we can pass another function 
function greet(){
    console.log("Hello from greet");
}
function morning(){
    console.log("I am from Morning");
}
function meet(callBack){
    console.log("Hello from meet");
    callBack();
}

meet(greet); 
meet(morning);