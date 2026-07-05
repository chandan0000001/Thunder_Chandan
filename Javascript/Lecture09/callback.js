

// // arr.sort((a,b)=>a-b);



// const arr = [10,20,1,3,98,8,11];


// // Callback = (a,b)=> a>b;

// Array.prototype.sorting = function(Callback){
    
//     // Bubble sort
//     for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(Callback(arr[j],arr[j+1])){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     } 
//    }
// }


// arr.sorting((a,b)=> a>b);


// // a>b: a and b swap
// // dont swap them 

// console.log(arr);


// // const obj = {
// //     name: "Rohit",
// //     age: 20
// // }


// // obj.sorted = function(){
// //     console.log("sorted");
// // }

// // console.log(obj);



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
// //for ascending oder 
// arr.sorrting((a,b)=> a>b);
// //for decending oder 
// // arr.sorrting((a,b)=> a<b);

// //a>b then a swap b
// // dont swap
// console.log(arr);




//the given array this is noramal without callback 
const arrx =  [23,2,4,7,2,1,145,5,7,8,90]
//create your cusoum function 
Array.prototype.sorrtingx = ()=>{
    //write here buuble sort logic 
    for(let i = 0 ;i<arrx.length;i++){
        for(let j = 0 ; j<arrx.length;j++){
            if(arrx[j]>arrx[j+1]){
                let tempx = arrx[j];
                arrx[j]=arrx[j+1];
                arrx[j+1]=tempx;
            }
        }
    }
}
arrx.sorrtingx();
console.log(arrx);


// now for callback functionn
const arrcall = [23,4,24,5,52,4542,0,1];
//coustumization function logic 
Array.prototype.sortx = (callxBack)=>{
    //now for bubble sort logic with callback 
    for(let i = 0 ;i<arrcall.length;i++){
        for(let j = 0 ; j<arrcall.length;j++){
            if(callxBack(arrcall[j],arrcall[j+1])){
                let tempx = arrcall[j];
                arrcall[j]=arrx[j+1];
                arrcall[j+1]=tempx;
            }
        }
    }
}
//function call 
arrcall.sortx((a,b)=>a>b); //for ascending oder 
console.log(arrcall);
const arrz = [12,34,0,1,1,3,5,61,2,3];
arrz.sortx((a,b)=>a<b); //for decendning oder 
console.log(arrz);