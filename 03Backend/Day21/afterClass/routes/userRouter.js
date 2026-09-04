import express from "express"
import {login ,signup ,profile ,logout,deleteAccount} from "../controllers/userController.js"
const userRouter = express.Router();

import authUserMiddleware from '../middleware/authUserMiddleware.js';

//login , logout , signup , profile 

userRouter.post("/login", login);

userRouter.post("/logout", logout);

userRouter.post("/signup", signup);

userRouter.get("/profile",authUserMiddleware, profile);

userRouter.delete("/delete",authUserMiddleware, deleteAccount);


export default userRouter;
