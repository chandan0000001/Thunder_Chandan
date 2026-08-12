import express from "express";
import mongoose from "mongoose"
const app = express();
import Customer from "./buildSchema.js";
import Users  from "./data.js";
await mongoose.connect("mongodb+srv://chandanzx1:chandanUserXYZ@cluster0.bpfqkoy.mongodb.net/chandan_thunder")
app.use(express.json());


//create customer 
app.post("/customer",async (req,res)=>{
    const customer = await Customer.create(req.body);
   res.json({
    message:"User is created Sucessfully",
    customer: customer
   })
})


//for get user information  
app.get("/customer",async (req,res)=>{
    const customer = await Customer.find();
    res.json({
        message:"All user information is Here",
        customer: customer
       })
})


//for bulk insert 
app.post("/customer/bulk",async (req,res)=>{
    const customer = await Customer.insertMany(Users);
   res.json({
    message:"User is created Sucessfully",
    customer: customer
   })
})

// to apply filter method on the bassis city may be delhi or mumbai 
app.get("/customer/filter" , async(req,res)=>{

    const {city,accountType} = req.query;//here req.query is an object 
    // req.query = {city:"Odisha",accountType:"current"}
    const customer = await Customer.find(req.query);
    res.json(customer);
})



//for getting particular user information 
// here use the ":" -> route para meter which apvcet everything 
app.get("/customer/:accountNumber" , async(req,res)=>{
    const accNumber = req.params.accountNumber;
    const customer = await Customer.findOne({accountNumber:accNumber})
    if(!customer){//if customer is not exist or equal to null
           res.json({
        message:"Customer doesnot exist  ",
        customer: customer
       })
    }else{
        res.json({
            message:"User information is Here",
            customer: customer
           })
    }
 
})



//for delete the user on the bassis their account number 
app.delete("/customer/:accountNumber" , async(req,res)=>{
    const accNumber = req.params.accountNumber;
    const customer = await Customer.findOneAndDelete({accountNumber:accNumber})
    if(!customer){//if customer is not exist or equal to null
           res.json({
        message:"Customer doesnot exist  ",
        customer: customer
       })
    }else{
        res.json({
            message:"Custoemr delete",
            customer: customer
           })
    }
 
})



//for update city of the user 
app.patch("/customer/:accountNumber", async (req, res) => {
    const { city ,age} = req.body;
    const user = await Customer.findOneAndUpdate(
        { accountNumber: req.params.accountNumber },
        { $set: {city: city, age: age} },
        //for return the new value 
        {new:true}
    );
    //(filter,update,{new:true})
    res.json(user);
});


//for update the balance of the user or upadate the balance of the user 
app.patch("/customer/deposite/:accountNumber",async (req,res)=>{
    const {balance} =  req.body;
    const user = await Customer.findOne({accountNumber:req.params.accountNumber})
    user.balance+=balance;//it is local change we need to send the data base
    await user.save();
    res.json(user);

})



app.patch("/customer/withdraw/:accountNumber",async (req,res)=>{
    const {balance} =  req.body;
    const user = await Customer.findOne({accountNumber:req.params.accountNumber})
    if(user.balance>=balance){ 
    user.balance-=balance;//it is local change we need to send the data base
    await user.save();
    res.json(user);
    }else{
        res.json({
            message:"Insffcieancent balance"
        })
    }
   

})

app.listen(3000,()=>{
    console.log("Server is Listening at port 3000")
})



