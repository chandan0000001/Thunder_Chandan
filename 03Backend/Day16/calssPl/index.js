import express from "express";
import connectionDB from "./config/database.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import messageRouter from "./routes/messageRouter.js";
import {login,signup,profile,logout} from './controllers/userController.js';
dotenv.config();


const app = express();
app.use(express.json());


app.use("/user",userRouter) ; //userrelated jo bhi ayega ussw userrouter ko bhejj dega 
app.use("/msg", messageRouter);


const startServer = async ()=>{
    try{
        await connectionDB() 
        app.listten(process.env.PORT , ()=>{
            console.log(`Server is listening at port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("Failed to connect Please try again");
        message:"error";
    }
   
} 

startServer();