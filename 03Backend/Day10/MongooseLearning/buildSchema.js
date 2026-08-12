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
      require:true,
      unique:true,
      index:true //it create B+ tree and index used for seach faster 
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
      enum:["current","saving"],
      default:"saving"
   },

},{timestamps:true})


const Customer = mongoose.model("Customer",userSchema)
//in database automaticly customer schema build hojayega 
export default Customer;