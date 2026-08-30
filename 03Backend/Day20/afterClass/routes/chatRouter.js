import express from "express";
import authUserMiddleware from "../middleware/authUserMiddleware.js";
import { getSingleChat ,createChat ,getSingleChat ,deleteChat } from "../controllers/chatcontroller.js";

//get recent chat :  top 20 chat , getSingleChat , createChat , deleteChat


const chatRouter = express.Router();

chatRouter.use(authUserMiddleware); 

chatRouter.post("/createChat",createChat);
chatRouter.get("/getRecentChat" , getRecentChat);
chatRouter.get(":chatId" ,getSingleChat);
chatRouter.delete(":chatId" , deleteChat);


export default chatRouter;