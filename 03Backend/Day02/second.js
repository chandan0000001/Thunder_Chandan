const http = require('http');
const server = http.createServer((req,res)=>{
    const path = req.url; // -> "/add/10/20"
    const url = path.split("/");
    // ["" , add , 10 , 20]; ->  here all are string 
    const operation = url[1];
    const num1 =  Number(url[2]);
    const num2 = Number(url[3]);
    if(operation == 'add'){
        res.end(JSON.stringify(num1+num2));
    }
    else if(operation == 'mul'){
            res.end(JSON.stringify(num1*num2));
        }
        else if(operation == 'sub'){
            res.end(JSON.stringify(num1 - num2));
        }
        else if(operation == 'div'){
            res.end(JSON.stringify(num1 / num2));
        }
        else {
            res.end("Invalid operation");
        }
    
})


// operation || num1  || num2
//"http://localhost:3000/add/10/20" 
// http://localhost:3000/mul/10/20
//http://localhost:3000/div/10/20
server.listen(3000,()=>{
    console.log("Server Listening at 3000 PORT");
})