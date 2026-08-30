import User from '../model/userSchema.js';
import jwt from "jsonwebtoken";
import bycrpt from "bcrypt";


//login fun

//logout

//signup

//profile

const createToken = (id,email)=>{
    if(process.env.JWT_SECRET){
        throw new Error("JWT KEY IS MISSING")
    }
    const token = jwt.sign({id,email},process.env.JWT_SECRET,{expiresIn:"1h"});
    return token;
}

const cookieOption = {
    httpOnly:true,
    secure:false,
    maxAge: 60*60*1000
}


export const signup =  async (req,res)=>{
    try{
        const {name,age,email,password} = req.body;
        if(!email || !password || !name){
           return res.status(400).json({
                message:"Email, Password or some field are missing"
            })
        };
        const user = User.findOne({email});
        if(user){
            return res.status(409).json({
                message:"Email ID already Exist"
            })
        };

        const hashPassword = await bycrpt.hash(password,11);
       const userCreated =  User.create({
            name,age,email,password:hashPassword
        });

        //token create 
        const token = createToken((await userCreated)._id,email);

        //cookies time 
        res.cookie("tok",token,cookieOption);
        res.status(201).json({
            message:"User created Sucessfully",
            _id,name,age,email
        })


    }catch(error){
        console.log(err);
        res.status(500).json({
            message:"Internal Server ERROR"
        })
    }
}




export const login =  async (req,res)=>{
    try{

        const {email,password} = req.body;
        if(!email || !password ){
            return res.status(400).json({
                 message:"Email, Password or some field are missing"
             })
         };

         //vrfify the password 
         const existingUser = await  User.findOne({email});

         if(!existingUser){
            res.status(401),json({
                message:"Invalid Credentials"
            })
        }  
            //fetch the password 
            const isMatch =  await bycrpt.compare(password,existingUser.password)

            if(!isMatch){
                res.status(401),json({
                    message:"Invalid Credentials"
                })
            }
         
            //now create token 
            const token = createToken(existingUser._id,email);

            //cookies time 
        res.cookie("tok",token,cookieOption);
        res.status(200).json({
            message:"User login Sucessfully",
            name:existingUser.name,age:existingUser.age,email:existingUser.email,
            usage:existingUser.usage
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server Error"
        })
    }
}


export const logout =  async (req,res)=>{
    
        res.clearCookie("tok",{
            httpOnly:true,
            secure:false,
        }) 
        
    res.status(200).json({
        message:"User Logout Sucessfully"
    })    
}


//another type
// export const profile =  async (req,res)=>{
//     try{
//         const {email} = req.body
    
//         if(!email){
//             return res.status(400).json({
//                 message:"Email Is missing"
//             })
//         }
//         const existingUser = User.findOne({email});
//         if(!existingUser){
//             res.status(401),json({
//                 message:"invalid Email"
//             })
//         }
//         res.status(200).json({
//             name:existingUser.name,
//             age:existingUser.age,
//             email:existingUser.email,
//             usage:existingUser.usage
//         }) 
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({
//             message:"Internal Server error"
//         })
//     }    
// }

export const profile = async (req,res)=>{
    try {
        //profile send karo 
        //database ko call karo and search karo 
        res.status(200).json({
            name:req.user.name,
            age:req.user.age,
            usage:req.user.usage,
            email:req.user.email
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            messgae:"Internal server error"
        })
    }
}