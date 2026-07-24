
// // const arr = [3,54,18,11,20,19,2];


// // const Callback = (num)=> num>10;

// // for(let num of arr){
// //     if(Callback(num))
// //         answer.push(num);
// // }



// Array.prototype.filtered = function(Callback){
//     const answer = [];

//     for(let num of this){
//          if(Callback(num))
//             answer.push(num);
//     }

//     return answer;
// }

// const arr = [3,54,18,11,20,19,2];
// // this = 

// const ans = arr.filtered((num)=> num>10);
// console.log(ans);


// const a = [-10,3,5,18,-9,14];
// // this = [-10,3,5,18,-9,14]
// const answer = a.filtered((num)=> num>10);
// console.log(answer);



// // const answer = arr.filter((num)=> num>10);

// // // answer = [54,18,11,20,19]
// // console.log(answer);


// const arr = [3,54,18,11,20,19];
// const ans  = arr.filter((num)=>{
//    return  num>10
// }); //it shows the jo number 10 se bade he usse return karrr do 
// console.log(ans);







// const CallBack = (num)=> {
//     return num > 10;
// }
// const arr = [3,54,18,11,20,19];
// const ans = [];
// for (x of arr ){
//     if(CallBack(x)){
//         ans.push(x);
//     }
// }
// console.log(ans);




// const arr = [3,54,18,11,20,19];
// Array.prototype.filterd = function(CallBack){
//     const ans = [];
// for (x of this ){
//     if(CallBack(x)){
//         ans.push(x);
//     }
// }
//  return ans;
// }

// const y = arr.filterd ((num)=> {return num > 10; })
// console.log(y)

// const a = [102,34,345,3344,6,6,7,8,9,9,20]
// //this is used for this point karyega unkoo 
// const ansx = a.filterd((num)=>{return num>10})
// console.log(ansx);





// const arrx = [1,0,23,4,2,23,5,22,9,6,5,4];
// Array.prototype.filtx=  (callBack)=>{
//     const ans = []; //this is empty array 
//     for(y of this){  // we cannot use this in arrow function so this throw error 
//         if(callBack(y)){
//             ans.push(y);
//         }
//     }
//     //return the ans array
//     return ans;
// }
// const z = arrx.filtx((a)=>{ return a>10});
// console.log(z);



// const arrx = [1, 0, 23, 4, 2, 23, 5, 22, 9, 6, 5, 4];
// Array.prototype.filtx = function (callback) {
//     const ans = [];
//     for (const y of this) {
//         if (callback(y)) {
//             ans.push(y);
//         }
//     }
//     return ans;
// };
// const z = arrx.filtx((a) => a > 10);
// console.log(z);




const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
    { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
    { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
  ];
  
const availableProducts =  products.filter((element,index)=>{
    return element.inStock==true && element.category=="Electronics"
})  
console.log(availableProducts);