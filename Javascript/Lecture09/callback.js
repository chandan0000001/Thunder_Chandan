

// // // arr.sort((a,b)=>a-b);



// // const arr = [10,20,1,3,98,8,11];


// // // Callback = (a,b)=> a>b;

// // Array.prototype.sorting = function(Callback){
    
// //     // Bubble sort
// //     for(let i=0;i<arr.length;i++){
// //     for(let j=0;j<arr.length-1;j++){
// //         if(Callback(arr[j],arr[j+1])){
// //             let temp = arr[j];
// //             arr[j] = arr[j+1];
// //             arr[j+1] = temp;
// //         }
// //     } 
// //    }
// // }


// // arr.sorting((a,b)=> a>b);


// // // a>b: a and b swap
// // // dont swap them 

// // console.log(arr);


// // // const obj = {
// // //     name: "Rohit",
// // //     age: 20
// // // }


// // // obj.sorted = function(){
// // //     console.log("sorted");
// // // }

// // // console.log(obj);



// const arr = [10,0,33,20,40,250];
// //this is my coustumize function 
// Array.prototype.sorrting =  (callback)=> {
//     for(let i=0 ;i<arr.length;i++){
//             for(let j=0 ; j<arr.length;j++){
//                 if(callback(arr[j],arr[j+1])){
//                     let temp = arr[j];
//                     arr[j]= arr[j+1];
//                     arr[j+1]=temp;
//                 }
//             }
//         }
// }

// // arr.sorrting((a,b)=> a>b);
// arr.sorrting((a,b)=> a<b);

// //a>b then a swap b
// // dont swap
// console.log(arr);



