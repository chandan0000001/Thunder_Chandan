// // app.use
// import exprees from "express"

// const app = exprees();


// // app.use((req,res)=>{
// //     res.send("Hello Ji");
// // });

// // app.use("/practice",(req,res)=>{
// //     res.send("Hello Useer");
// // })

// const isVerfied = false;
// const isAdmin = true;

// // function rohit(){

// // }

// app.use("/practice",(req,res,next)=>{
//     if(!isVerfied){
//         res.send("Kindly Login");
//         return;
//     }
//     next();
// })

// app.use("/admin",(req,res,next)=>{
//     if(!isAdmin){
//         res.send("You are not permitted to do this");
//     }
//     next();
// })


// app.get("/",(req,res)=>{
//     res.send("Welcome to home page");
// })


// app.get("/article",(req,res)=>{
//     res.send("Welcome to article");
// })


// app.get("/practice",(req,res)=>{
//     res.send("This is your problme page")
// })

// app.get("/practice/:id",(req,res)=>{
//     res.send(`This is your problem number ${req.params.id}`);
// })

// app.post("/practice",(req,res)=>{
//     // post
//     res.send(`Your post is created`);
// })


// app.get("/admin",(req,res)=>{
//     res.send("I am admin");
// })

// app.get("/admin/createProblem",(req,res)=>{
//     res.send("I am admin created the problem");
// })

// app.get("/admin/contest",(req,res)=>{
//     res.send("I am admin contest");
// })










// // app.use((req,res)=>{
// //     res.send("Hello Ji");
// // });





// app.listen(3000,()=>{
//     console.log("Server is Listening at port 3000");
// })



import express from "express"
const app = express();


// app.use("/product",(req,res)=>{
//     res.send(`Ham get pos sab ko mante ham "/product" ko hii mannte he  `);  //ham sab kuch apcet kaereynge jo ukhad na he ukhadd do 
//     //"/product/chandan"
//     //"/product/chandan/9"
//     //"/product/chandan/admin/user"
//     //"/product/chandan/user"
//     // only prefix match then go -> "/product"
// })
const isAdmin = true;
const isVerify = false;


app.use("/admin",(req,res,next)=>{
    if(!isAdmin){
        res.end("You are not permitted to do this")
    }else{
        next();
    }
})
app.use("/pratice",(req,res,next)=>{
    if(!isVerify){
       return res.send("Login karrde bhaii");
    }
    next();
 
})



app.get("/",(req,res)=>{
    res.send("Wealcome to homePage");
})
app.get("/article",(req,res)=>{
    res.send("Wealcome to articlePage");
})




app.get("/pratice",(req,res)=>{
       res.send("This is your probleamm page");
})
app.get("/pratice:id",(req,res)=>{
       res.send(`This is your probleam ${req.params.id}`)
   
})
app.post("/pratice",(req,res)=>{
    res.send(`Your Post is created`)

})



app.get("/admin",(req,res)=>{
    res.send("I am admin");
})
app.get("/admin/createProbleam",(req,res)=>{
    res.send("I am admin");
})
app.get("/admin/contestManagement",(req,res)=>{
    res.send("I am admin");
})



// app.use((req,res)=>{
//     res.send("Hello man ");  //ham sab kuch apcet kaereynge jo ukhad na he ukhadd do 
// })
app.listen(3000, ()=>{
    console.log("Server is listening at port 3000");
})