// const arr1 = [10,20,30,40,50]

// const arr2 = arr1;

// arr2[2] = 84;

// console.log(arr1);


// 1 Dimension array:
// 2 Dimensional array: array ke andar array
// [[10,20,30],[90,9,11]]
// const arr = [[10,20,30],[40,50,69],[20,11,18],[43,52,63]];

// console.log(arr[2].length)

// 2 dimensional: arr.length: Number of rows kitni hai: number of one dimension array kitne hai
// console.log(arr.length);

// console.log(arr[0][2]);


// for(let row=0;row<arr.length;row++){
//     for(let col=0;col<arr[row].length;col++){
//         console.log(arr[row][col]);
//     }
// }

// const arr = [[10,20,30],[40,50,69],[20,11,18],[43,52,63]];
// // row = [40,50,69]
// for(let row of arr){
//     for(let col of row){
//         console.log(col);
//     }
// }


// 3D array: [[10,20],[30,11,[89,21,11]]]


// 1D array, 2D array:

// Factual
// const num1 = [10,20,30,40,50,[20,30,70]];
// const num2 = [42,12,54,11];
// const num3 = [5,1,453,12,53]

// // const num = num1.concat(num2,num3);
// // // num1.push(num2);

// // console.log(num);
// // spread operator
// Important
// const num = [...num1,...num2,...num3]
// // const num = [num1,num2,num3]
// // [10,20,30,40,50,42,12,54,11,5,1,12,53]

// console.log(num);


// const num = [10,20,30,40,90]

// // const first = num[0];
// // const second = num[1];

// const [first,second,bhains, ...remaining] = [10,20,30,40,90,3812,2];
// // remaining array: Rest operator: (...)
// console.log(first,second,bhains,remaining)
// It is very important topic

// left hand: rest operator
// Right hand: spread operator

// ...



// // const arr1  = [10,20,30,40,50]
// // const arr2 = arr1;

// // arr2[2] = 84;
// // console.log(arr1);




// const arr = [[10,20,40,304],[102,323,43,53],[2243,235,32,24],[2542,23,55,23]];
// // console.log(arr);
// //print no of rows or 1d aray
// // console.log(arr.length);
// // console.log(arr);
// console.log(arr[0]);
// console.log(arr[0][0]);
// console.log(arr[0][1]);
// console.log(arr[0][2]);
// console.log(arr[0][3]);
// // console.log(arr[0][4]); 



// const num1 = [10,20,3035,2];
// const num2 = [1230,154,52,234];
// let num3 = [2433,342,54,234,1243];
// const num  = num1.concat(num2,num3);
// console.log(num1);
// console.log(num);



// //spread operator 
// const nums = [...num1,...num2,...num3];
// console.log(nums);







// const num = [10,20,30,40,60];
// // const first =  num[0];
// // const second = num[1];
// //remaining is the store the all  rest numbers by using rest operator 
// const [first , second ,...remaining]  = num ;
// //remaining array : Resst operator (...)
// console.log(first , second , remaining);



// const num = [23,35,25,2,4,246,423,66]
// const first = num[0]; const second = num[1];
// console.log(first,second); //23 35
// const n1 = num[0];const n2 =num[1]; //rest part will store in the n3 
// const restx = [n1,n2,...num];
// console.log(restx)




let numx = [13,11,21,23,122]
numx.sort((a,b)=>{a-b});
console.log(numx);












// const num1 = [23,341,45,45,5,34,52,35]
// const num2 = [1,3,4,56,6,3,2,4,5]
// const num3 = [25,5,24,0,6,7,8,8,7,6,5]
// //old method > .concat();
// const num = num1.concat(num2,num3);
// console.log(num);
// //new method > spread operator 
// const numx = [...num1,...num2,...num3]
// console.log(numx);