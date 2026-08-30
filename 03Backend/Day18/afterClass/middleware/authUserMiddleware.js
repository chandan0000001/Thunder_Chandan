import jwt from "jsonwebtoken"
import User from "../model/userSchema.js";
import { response } from "express";
const authUserMiddleware = async (req,res,next)=>{
    try{

        const {token} = req.cookies;
        const payload = jwt.verify(token,process.env.JWT_SECRET);

        const existingUser = await User.findById(payload.id);

        if(!existingUser){
            return res.status(404).json({
                message:"User Doesnot Exist"
            })
        }


        req.user = existingUser;
        next();


    }
    catch(err){
        console.log(err);
        response.status(500).json({message:"Internal server Error"})
    }
}

export default authUserMiddleware;