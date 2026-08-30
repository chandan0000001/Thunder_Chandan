// import mongoose from "mongoose";
// const userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         minLength:3,
//         maxLength:30,
//         trim:true,
//         required:true,
//         unique:true
//     },
//     phoneNumber:{
//         type:Number,
//         required:true,
//         minLength:10,
//         maxLength:10
        
//     },
//     age:{
//         type:Number,
//         minLength:1,
//         maxLength:2,
//         min:1,max:99
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//         type:String
//     }
// },
// {
//     timestamps:true
// })

// //upar jo userschema he usse use karrke model bannahe 
// //so uska format mongose.model("name" , schemaname )
// const user = mongoose.model("user", userSchema);
// export default user;


import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    minLength:3,maxLength:30,trim:true,
    required:true,unique:true

  },phoneNumber:{
    type:Number,
    required:true,
    validate:{
        validator : function(value){
            return validator.isMobilePhone(value,"en-IN")
        },
        message:"Enter a valid Phone Number"
    }
  },age:{
    type:Number,min:1,max:100
  },email:{
    type:String,required:true,unique:true,trim:true,
    validate:{
        validator:function(value){
            return validator.isEmail(value)
        },
        message:"Enter a valid Email"
    }
  },password:{
    type:String,
    required:true,
    validate:{
        validator: function(value){
            return validator.isStrongPassword(value, {
                minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1
            })
        },
        message:"Password Must be Strong"
    }
  },


},{
    timestamps:true
});

const user = mongoose.model("user",userSchema);
export default user;