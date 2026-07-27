const http = require('http');
const url = require('url');
const server = http.createServer((request,response)=>{

    // http://localhost:3000/add?num1=10&num2=20
    //ulr.parsed converrt this object below type it also know as query string here pathname and query this are called keyword or fixed in js 
    //here we got data this type 
    // parsed fn -> backend 
    // {
    //     pathname : "/add",
    //     query : {
    //         number1=10,
    //         number2=20
    //     }
    // }

      const parsed = url.parse(request.url,true);
      const operation = parsed.pathname.slice(1);
      const number1 = Number(parsed.query.num1);
      const number2 = Number(parsed.query.num2);
    
    if(operation==='add'){
        response.end(JSON.stringify(number1+number2));
    }
    else if(operation=='sub'){
        response.end(JSON.stringify(number1-number2));
    }
    else if(operation=='mul'){
        response.end(JSON.stringify(number1*number2));
    }
    else if(operation=='div'){
        response.end(JSON.stringify(number1/number2));
    }
    else{
        response.end("Invalid Operation");
    }
    
})


server.listen(3000,()=>{
    console.log("Server is listening at 3000 port");
})