import express from "express"
import User from "./userSchema.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import mongoose from "mongoose"
import bcrypt from "bcrypt";

await mongoose.connect("mongodb+srv://chandanzx1:chandanUserXYZ@cluster0.bpfqkoy.mongodb.net/LearnAuthday13")
const app = express();
app.use(express.json());
app.use(cookieParser());



app.post("/signup",async (req,res)=>{
    const {name,age,email,password} = req.body;


    const hashPassword = await bcrypt.hash(password,10)
    const ux = await User.create({
        name,age,email,password:hashPassword
    });
    
    //token bhejna padega 
    //payload , secret key , optional field
    const token = jwt.sign({
        //here the signature created
        email:email,
        name:name
      },
      //secretKey
      "chandan@1010",
      {expiresIn:"1h"} //it enter token when create and expire date 
   );

//one is key and value //here we talk with browser 
//Another things we can create random ID for those who are not login in websites
   res.cookie("token",token,{
    httpOnly:true,
    secure:false, //agar true kiya https pe bhejega warna http pe bhi 
    maxAge:60*60*1000 //timer for browser token expire in 1 hour 
   })
   res.status(202).json({
    message: "User profile is cretaed",
   })
})

app.get("/user",async(req,res)=>{
    //verify the token
    const {token} = req.cookies;
    //verify the token valid yes or no 

    const payload =  jwt.verify(token,"chandan@1010");//here we are using symmatric process 



    const u = await User.findOne({email: payload.email});
    if(u){
    res.json({
        message:"Your user detail",
        name:u.name,
        email:u.email,
        age:u.age
    })
  }else{
    res.json({
        message:"User not found"
    })
  }
})


 
app.post("/login" , async (req,res)=>{
    const {email,password} = req.body;
    //verify it s password 
    const u = await User.findOne({email:email});

    if(u){

        const isMatch = await bcrypt.compare(password,u.password)

        if(isMatch){
            const token = jwt.sign({
                //here the signature created
                email:email,
                name:u.name
              },
              //secretKey
              "chandan@1010",
              {expiresIn:"1h"} //it enter token when create and expire date 
           );
     
           res.cookie("token",token,{
            httpOnly:true,
            secure:false,  
            maxAge:60*60*1000 
           })
           res.status(202).json({
            message: "User Login sucessfully",
           })
        }else{
            res.json({
                message:"User not found"
            })

        }
    }else{
        res.json({
            message:"User not found"
        })
    }

})


app.listen(3000,()=>{
  console.log("Server is Live on 3000 port ")  
})