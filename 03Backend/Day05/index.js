// import express from "express"

// const app = express();

// const Database = [];
// // app ek object, get ek method hai, 2 argument: url match karata, callback ko implement kar deta hai
// // saare path ko accept karta hai: get, post, patch, put, delete
// // Middle ware

// app.use(express.json());
// // authentication
// // rate limiter


// app.get("/",(req,res)=>{
//     res.send("Welcome to Home Page");
// })


// app.get("/user",(req,res)=>{
//     res.send("Mere toh maje hai");
// })

// app.post("/user",(req,res)=>{
//     console.log(req.body);
//     res.send("Post create kar di hai");
// })

// app.delete("/user",(req,res)=>{
//     res.send("I have deleted");
// })






// app.listen(3000,()=>{
//     console.log("I am listening at port 3000");
// })



const Database = [];

import express from "express";
const app = express();
app.use(express.json());
// app is a object he  get ek method he 2 argument if path match then call to the callBack 
app.listen(3000,()=>{
    console.log("Server is Listening at 3000");
})
app.get("/user",(req,res)=>{
    res.send("Mere to majeee hee ");
})
app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send(" Post is Done ");
})
app.delete("/user",(req,res)=>{
    res.send("Delete is done  ");
})

app.get("/" , (req,res)=>{
    console.log("Wealcome to homePage")
})
// const app = express();//server is created 
