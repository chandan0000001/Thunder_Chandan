import dotenv from "dotenv/config";
import express from "express";
import connectionDB from "./config/database.js";
import userRouter from "./routes/userRouter.js";
import messageRouter from "./routes/messageRouter.js";
import chatRouter from "./routes/chatRouter.js";
import cookieParser from 'cookie-parser';
import {login,signup,profile,logout} from './controllers/userController.js';



// dotenv.config();


const app = express();



app.use(express.json());
app.use(cookieParser());

app.use("/user",userRouter) ; //userrelated jo bhi ayega ussw userrouter ko bhejj dega 
app.use("/msg", messageRouter);
app.use("/chat",chatRouter);

const startServer = async ()=>{
    try{
        await connectionDB() 
        app.listen(process.env.PORT , ()=>{
            console.log(`Server is listening at port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("Failed to connect Please try again");
        console.error("ERROR",error);
    }
   
} 

startServer();
