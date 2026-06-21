
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




const arr = [3,54,18,11,20,19];

Array.prototype.filterd = function(CallBack){
    const ans = [];
for (x of this ){
    if(CallBack(x)){
        ans.push(x);
    }
}
 return ans;
}

const y = arr.filterd ((num)=> {return num > 10; })
console.log(y)















const a = [102,34,345,3344,6,6,7,8,9,9,20]
//this is used for this point karyega unkoo 
const ansx = a.filterd((num)=>{return num>10})
console.log(ansx);