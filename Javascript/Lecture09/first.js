// // Callback ki baare mein pada th...
// // function ke andar dusre function as a argument kar sakte hai...

// function add(num1, num2){
//     return num1+num2;
// }


// function sub(num1,num2){
//     return num1-num2;
// }


// function mul(num1,num2){
//     return num1*num2;
// }



// function calculator(num1,num2,caller){
//     console.log("I am doing Calculation");
//     const result = caller(num1,num2);
//     console.log(`Your result ${result}`);
// }


// Callback = function(a,b){
//     return a/b;
// }

// // calculator(10,20,mul);
// // calculator(10,20,add);

// // calculator(30,5,function(a,b){
// //     return a/b;
// // })

// calculator(15,3,(a,b)=>{
//    return a/b;
// })



// function add(num1,num2){
//     return num1+num2;
// }
// function sub(num1,num2){
//     return num1-num2
// }

// function mul(num1,num2){
//     return num1*num2
// }
// function div(num1,num2){
//     num1/num2;
// }

// function calculator(num1,num2,Callback){
//     console.log("I am doing calculation");
//     const result = Callback(num1,num2);
//     console.log(`Your result ${result}`);
// }
// calculator(10,20,mul);
// calculator(10,20,add);
// calculator(10,20,sub);


// //Modulo
// calculator(10,5,function(a,b){
//     return a%b;
// })


// calculator(15,2,(f,h)=>{
//     return f%h;
// })




//let see the simple callback code for calculation 
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function mod(a,b){
    return a%b;
}
function calculator (num1,num2,x){
    console.log("I am thinking");
    const ans = x(num1,num2);
    console.log(`your Answer is ${ans}`);
}
calculator(12,23,add);
//here the x is the callback Function 
//You can did like also pass your function on the X 
//see below
calculator(2,3,(k,s)=>{
    return k**s;
})