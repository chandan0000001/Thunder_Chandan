// here we need to construct 
// operation || num1  || num2
//"http://localhost:5000/add/10/20" 
// http://localhost:5000/mul/10/20
//http://localhost:5000/div/10/20
const http = require('http');
const server  =  http.createServer((req,res)=>{
    const urlArr = req.url.split('/');
    //adding variablle
    const opperation = urlArr[1]; //here the urlArr[0] is occupied by the  '/' 
    const num1 = Number(urlArr[2]);
    const num2 = Number(urlArr[3]);
    if(num1 == NaN || num2 == NaN){
        return res.end("bhaii Kuch acha dalde");
    }
    else if( opperation == 'add'){
        res.end(JSON.stringify(num1+num2))
    }
    else if( opperation == 'sub'){
        res.end(JSON.stringify(num1-num2))
    }
    else if( opperation == 'mul'){
        res.end(JSON.stringify(num1*num2))
    }
    else if( opperation == 'div'){
        if(num1 < 0 && num2 < 0){
            return res.end("Invalid Opeation");
        }else{
            res.end(JSON.stringify(num1 / num2)) 
        }
       
    }

});

server.listen(5000,()=>{
    console.log("Server is Listening at Port 5000");
})