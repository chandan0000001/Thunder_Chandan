import express from "express";
import authUserMiddleware from "../middleware/authUserMiddleware.js";
import { getMessage,sendMessage } from "../controllers/messageController.js";
import authenticatedRateLimiter  from '../middleware/authUserMiddleware.js'
import tokenUsageMiddleware from "../middleware/tokenUsageMiddleware.js";
import loadUserMiddleware from "../middleware/loadUserMiddleware.js";
const messageRouter = express.Router();

messageRouter.use(authUserMiddleware);
// getMessage sendMessage
messageRouter.use(authenticatedRateLimiter);

messageRouter.post("/", tokenUsageMiddleware , loadUserMiddleware , sendMessage);
messageRouter.get("/:chatId" ,loadUserMiddleware, getMessage);
messageRouter.post("/:chatId" , tokenUsageMiddleware , loadUserMiddleware ,  sendMessage);







export default messageRouter;