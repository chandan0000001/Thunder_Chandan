
const db = [
    {
        "name":"Rohini",
        "age":32,
        "email":"roh@gamil.com",
        "amount":23432
    },{
        "name":"Sujal",
        "age":30,
        "email":"sujal@gamil.com",
        "amount":23432
    },{
        "name":"Sreelekha",
        "age":12,
        "email":"lekha@gamil.com",
        "amount":242
    },{
        "name":"Santosh",
        "age":2,
        "email":"santosh@gamil.com",
        "amount":212
    }
]



import http from 'http';
const server = http.createServer((req,res)=>{
    // res.end('hello chandan')
    

    //get , post , put , patch ,delete

    if(req.method=="GET" && req.url == "/user"){

        // return res.end(JSON.stringify(db));
        return res.end(JSON.stringify(db,null,2));
    }


    else if(req.method=="POST" && req.url == "/user"){
        // const user = req.Body;
        // console.log(user); data travel multilple packests but it catch all at a time so it return undefined so mujeh wait karrna he yaha pe -> Think about async await but we can try another things 

        //body empty string he chunk pe packets ayegnge body ke andar dallna he 
        let body ="";
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",(chunk)=>{
            const user = JSON.parse(body);// for convert into js object parse used 
             db.push(user);
        })
       
        return res.end("User Data is Created sucessfully")
    }

    
    else if(req.method=="PATCH" && req.url == "/user"){
        let body ="";
        req.on("data",(chunk)=>{
            body+=chunk; //store in second storage 
        })
        req.on("end",(chunk)=>{
            const user = JSON.parse(body);// for convert into js object parse used 
            const findUser = db.find((u)=>u.email == user.email);
            Object.assign(findUser,user);
        })
        return res.end("User Data is PATCHED sucessfully")
    }





    else if(req.method=="PUT" && req.url == "/user"){
        return res.end("User Data is PUT sucessfully")
    }
    else if(req.method=="DELETE" && req.url == "/user"){
        return res.end("User Data is DELETED sucessfully")
    }
    else{
        res.end("Invalid Route")
    }
    
})
server.listen(3000,()=>{
    console.log("Server is Listening at 3000")
})