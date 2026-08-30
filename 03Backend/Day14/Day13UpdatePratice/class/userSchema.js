import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name:{type:String,
      minLength:3,
      maxLength:20,
      trim: true,//age piche khali space ko  trim kardo 
      require:true,
      unique: true, //value unique and khud ka index 
   },
   age:{
      type:Number,
      min:18,
      max:100
   },
 email:{
    type: String,
    unique:true
 },
 password:{
    type: String
 }

},{timestamps:true})


const User = mongoose.model("User",userSchema)
//"Mongoose, is userSchema ko use karke ek Model bana do jiska naam User hai."
//in database automaticly customer schema build hojayega 
export default User;




//index true it create index duplicate apceted 
//unique: true it create unique value of an index and uske around create index if email is not given null arround apceted 
//sparse: true entry user ne kiya ho to tabi index create hoge warna nahii 