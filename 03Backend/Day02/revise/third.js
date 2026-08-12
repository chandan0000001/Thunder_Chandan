// here we stuied about 'url.parsed' 
// parsed fn -> backend 
// {
//     pathname: "/add",
//     query: {
//         Number1 = 10,
//         Number2 = 20
//     }
// } //here the pathname and query are the constant value 
const http = require('http');
const url = require('url')
const server = http.createServer((req,res)=>{

    const parsed = url.parse(req.url,true);
    const opperation = parsed.pathname.slice(1);
    const num1 = Number(parsed.query.num1);
    const num2 = Number(parsed.query.num2);
    if( isNaN(NaN) || isNaN(NaN)){
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
        if(num2 === 0) {
            return res.end("why are you divided  by zero are you crazy");
        }else{
            res.end(JSON.stringify(num1 / num2)) 
        }
       
    }

});

server.listen(5000,()=>{
    console.log("Server is Lisening at Port 5000");
})