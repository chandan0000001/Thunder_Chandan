var a = 10 ;
var b = 20 ;
function addNumber (num1,num2){
    let sum = num1+num2;
    return sum;
}

//below part is not working 
//function add(n1,n2){
// return n1+n2
//}

const sum1 = addNumber(2,4);
const sum2 = addNumber(21,5);
console.log(sum1 , sum2);




//execution contest 
//1. Memory allocation 
//2. Code execution phase 
//First context was created then memory pahse  then code 
//
//Memory 
//a = undefined 
//b = undefined 
//addNumber = store Fn 
//sum1 = undeffiide
//sum2 = undefined 


//code or execution phase 
//a = 10;
//b = 20;
// addNumber <-  no need to run 



// sum1 = call to Function and run it  -> here new execution context start 
// again memory and execution phase 
// memory 
// num1 = undefined 
// num2 = undefined
// sum = undefined 
// code phase or execution phase 
// num1 = 2 , num2 = 4 ,  sum = 6 and resturn the sum value 


// sum2 = call to function and run it 
//// again memory and execution phase 
// memory 
// num1 = undefined 
// num2 = undefined
// sum = undefined 
// code phase or execution phase 
// num1 = 21 , num2 = 5 ,  sum = 26 and resturn the sum value 


// In the end print function will start 