
// const arr = [10,20,8,19,14,23];


// const printer = (num)=>{
//     console.log(num);
// }

// printer(20);


// Array.prototype.forLoop = function(Callback){
//     for(let i=0;i<arr.length; i++){
//         Callback(arr[i],i,arr);
//     }
   
// }






// arr.forLoop((num,index)=>{
//     console.log(num,index);
// });



// const arr = [10,20,8,19,14,23];

// // First value number, second: index, third: array 
// arr.forEach((i,j,k)=>{
//    console.log(i,j,k);
// })

// CallBack(10,0,arr);


// function aditya(num1){
//    console.log(num1);
// }


// aditya(10,20,"Rohit");








// //first value second index thired array
// const arr = [10,2022,52,43,252,6,56,67,9];
// arr.forEach((num,index,arr)=>{
//     console.log(num,index,arr);
// })




// function aditya(num1,num2,num3){
//     console.log(num1);
// }

// aditya(10,20,"Rohit");


const arr = [10,20,8,19,14,23];

// const printer = (num,index,a)=>{
//     console.log(num,index,a);
// }

Array.prototype.forLoop = function(x){
    for(let i = 0 ;i <arr.length;i++){
        x(arr[i],i,arr);
    }
}


// arr.forLoop(printer);
arr.forLoop((num,index,a)=>{
    console.log(num,index,a);
});