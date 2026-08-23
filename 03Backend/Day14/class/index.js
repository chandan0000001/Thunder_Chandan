// import bcrypt from "bcrypt";


// const planepasspass = "chandan@322D";
// // hash + salt 

// // const hashPass =  await bcrypt.hash(planepasspass,10) 
// //here the process asynchronese if slow process then its cycle is high 


// const isMatch = await bcrypt.compare(planepasspass,"$2b$10$699dTsy7Zq0hbbwNssQvEufFpxUEqYot2E9UrUpA0.z3kHLZUvPR2")

// console.log(isMatch);
// // console.log(hashPass);

// // for 10
// //$2b$10$699dTsy7Zq0hbbwNssQvEufFpxUEqYot2E9UrUpA0.z3kHLZUvPR2





// OLD method 
import bcrypt from "bcrypt";
const planepasspass = "chandan@322D";
const salt = await bcrypt.genSalt(10);
console.log(salt);
const hashPass = await bcrypt.hash(planepasspass,salt);
console.log(hashPass);