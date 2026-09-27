import express from "express";
import authUserMiddleware from "../middleware/authUserMiddleware.js";
import { getMessage,sendMessage } from "../controllers/messageController.js";
import authenticatedRateLimiter  from '../middleware/authUserMiddleware.js'


const messageRouter = express.Router();

messageRouter.use(authUserMiddleware);
// getMessage sendMessage
messageRouter.use(authenticatedRateLimiter);

messageRouter.post("/",sendMessage);
messageRouter.get("/:chatId" , getMessage);
messageRouter.post("/:chatId" , sendMessage);







export default messageRouter;