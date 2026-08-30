import express from "express"
const userRouter = express.Router();
//login , logout , signup , profile 
const login = async(req,res)=>{

}
userRouter.post("/login", login);

userRouter.post("/logout", logout);

userRouter.post("/signup", signup);

userRouter.get("/profile", profile);



export default userRouter;