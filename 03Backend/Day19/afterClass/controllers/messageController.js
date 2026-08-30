// getMessage , sendMessage
import Chat from "../model/chatSchema.js";
import Message from "../model/messageSchema.js";
import { response } from "express";

export const getMessage =  async(req,res)=>{
    try{

        const {chatId} = req.params;
        //verify this chat id belons to this user or not 
        const chat = await Chat.findOne({
            _id:chatId,
            userId:req.user._id
        });

        if(!chat){
            return res.status(404).json({
                message:"Chat not found"
            })
        }

       const message = await Message.find({
            chatId:chatId,
        }).sort({createAt:1}); //ascending oder

        res.status(200).json({
            message:"Yoour all messages are here",
            msg : message,
            model:chat.model
        });

    }catch(err){
        console.lod(err);
        response.status(500).json({
            message:"Internal server error"
        })
    }
}

export const sendMessage =  async(req,res)=>{
    try{

        const {chatId} = req.params;
        const {content} = req.body;

        if(!content || content.trim()=== "") {
           return  res.status(404).json({
                message:"Fuck There is no content here"
            })
        };



        //verify tht chat id belongs to the particular user 
        const chat = Chat.findOne({
            _id:chatId,
            userId:req.user._id
        })

       const Usermessage = await Message.create({
            userId: req.user._Id,
            chatId:chatId,
            role:"user",
            content:content
        });

        //constent send to AI 
        const dummyReplay = "Me Changa Si hu and dummy wala hu";
        const assMessage = await Message.create({
            userId: req.user._Id,
            chatId:chatId,
            role:"Assistant",
            content:dummyReplay
        });

        res.status(201).json({
            message:dummyReplay
        });

        
    }catch(err){
        console.lod(err);
        response.status(500).json({
            message:"Internal server error"
        })
    }    
}