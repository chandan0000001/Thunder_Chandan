// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.end("Hello man");
// })
// server.listen(3000,()=>{
//     console.log("Server is listen at 3000")
// })


const email = 'kumardalaichandan803@gmail.com';
const passwoard = 'chandan@#asC2';
const comment = 'weufh sbfkfh kjhksh kulfhd ';
//format check 
//password strong and weerk ?
//npm -> 
const validator = require('validator');
console.log(validator.isEmail(email)) // true
console.log(validator.isStrongPassword(passwoard)) // true
