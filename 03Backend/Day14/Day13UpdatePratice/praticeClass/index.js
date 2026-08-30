import express from "express";
import mongoose from "mongoose";
import user from "./userSchema.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
await mongoose.connect("mongodb+srv://chandanzx1:chandanUserXYZ@cluster0.bpfqkoy.mongodb.net/Day14Pratice")
const app = express();
app.use(cookieParser());
app.use(express.json());

app.post("/signup" , async (req,res)=>{
    const  {name,phoneNumber,age,email,password}=req.body;
    const hashPassword = await bcrypt.hash(password,11);
    const u = await user.create({
        name,phoneNumber,age,email,password:hashPassword
    });

    //JWT token
    // const token = jwt.sign({
    //     //payload
    // },
    // //secretKey
    // //[payload+secretkey] = signatuere
    // {
    //     //expiretime
    // })

    const token = jwt.sign(
        { name:name,email:email,age:age},
            "chandan@1020",
        {expiresIn:"1h"}
    );
    res.cookie  ("tok" ,token ,
     {
        httpOnly:true,
        secure:false,
        maxAge:60*60*1000
    })
    res.status(201).json({
        message: "User created successfully"
    });
})


app.get("/user", async (req,res)=>{
    //capture the token 
    const {token} = req.cookies;
    //token verify
    const payload = jwt.verify(token , "chandan@1020" ) //symamatric process 

    const u = await user.findOne({email : payload.email})
    if(u){
        res.status(202).json({
            message:`Nice to meet You ${u.name}`,
            name:u.name,
            email:u.email,
            phoneNumber:u.phoneNumber,
            age:u.age
        })
    }else{
        res.status(404).json({
            message:"User not Found Please Signup"
        })
    }
})


app.post("/login" , async(req,res)=>{
    const {email,password} =  req.body;
    const u = await user.findOne({email:email});
    if(u){
        //vrify the password 
        const isMatch = await bcrypt.compare(password,u.password);
        if(isMatch){
            //assign token 
            const token = jwt.sign({
                name:u.name,
                email:u.email
            },
            "chandan@1020",
            {expiresIn:"1h"}
         )
         //token case 
         res.cookie("tok" , token , {
            httpOnly:true,
            secure:false,
            maxAge:60*60*1000
         })
         res.status(202).json({
            message:"User login sucessfully"
         })
        }else{
            res.status(404).json({
                message:"Wrong email or password"
            })
        }
    }else{
        res.status(404).json({
            messsage:"User not Found please Signup"
        })
    }
})
app.listen(3000,()=>{
    console.log("Server is listening at port 3000");
})