import express from "express"
import {login ,signup ,profile ,logout,deleteAccount} from "../controllers/userController.js"
const userRouter = express.Router();
import authUserMiddleware from '../middleware/authUserMiddleware.js';
import unauthenticatedRateLimiter from '../middleware/unauthenticatedRateLimiter.js';
import authenticatedRateLimiter  from '../middleware/authUserMiddleware.js'
//login , logout , signup , profile 

userRouter.post("/login", unauthenticatedRateLimiter ,login);
userRouter.post("/logout", authUserMiddleware , authenticatedRateLimiter , logout);
userRouter.post("/signup", unauthenticatedRateLimiter ,signup);
userRouter.get("/profile",  authUserMiddleware, authenticatedRateLimiter ,profile);
userRouter.delete("/delete",authUserMiddleware, deleteAccount);


export default userRouter;
