// const arr = [10,20,30,40,50];

// accumulator = 150

// const sum = arr.reduce((accumulator,num)=>{
//     return accumulator+num;
// },0);

// acc = 6000

// const ans = arr.reduce((acc,num)=>{
//     return acc*num;
// },1)


// console.log(ans);


// accumulatoer = 0+10 it will be return to the accumulator then 10 +20 then 30
// 30+30 = 60  it will be countinue to end  and final sum is 150 it was return to the ansSum
// const arr =[10,20,30,40,50];
// //it reduce and make it in singlevalue 
// const ansSum = arr.reduce((accumulator,num)=>{
//     return accumulator+num; 
// },0)
// console.log(ansSum);




//multiplication 
// const mul = arr.reduce((x,num)=> {
//     return x*num
// },1);
// console.log(mul);


const arrx = [10,2,8,3,8,6,1,2,8];
//sum of element 
const ansx = arrx.reduce((accmu , intinalvalue)=>{
    return intinalvalue+accmu;
},0)
console.log(ansx);
//multipication of all element 
const mul = arrx.reduce((accu,int)=>{
    return accu*int;
},1)
console.log(mul);