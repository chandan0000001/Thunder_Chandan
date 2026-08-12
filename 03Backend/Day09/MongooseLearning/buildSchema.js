import mongoose from "mongoose";
//name , accountNumber , city , age , balance 
const userSchema = new mongoose.Schema({
   name:{type:String,
      minLength:3,
      maxLength:20,
      trim: true,//age piche khali space ko  trim kardo 
      require:true
   },
   accountNumber:{
      type:Number,
      require:true
   },
   city:{type:String,
      minLength:3,
      maxLength:20,
      trim: true,//age piche khali space ko  trim kardo 
   },
   age:{
      type:Number,
      min:18,
      max:100
   },
   balance:{
      type:Number,
      min:0,
      require:true
   },
   accountType:{
      type:String,
      require:true
   },

},{timestamps:true})


const customer = mongoose.model("Customer",userSchema)
export default customer;