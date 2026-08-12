import express from 'express';
import fs from 'fs'; //fs module read write in the file 
const app = express();

const DBPath = './database.txt'
function readDB (){
    const data = fs.readFileSync(DBPath,"utf-8"); //here "utf-8" is used for encoading whole data is aveialable in string format
    return JSON.parse(data) ; //string data was return in the form of JSON
}

function writeDB (data){
    //data is an array of object cinvert into IN JSON 
    fs.writeFileSync(DBPath,JSON.stringify(data,null,2))
}

//frontend se jo data ayega usse pass kardiya jayega
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Wealcome To homepage");
})

//fetch coustumer 
app.get("/user/:accountNumber",(req,res)=>{
    const accountId = req.params.accountNumber;
    const account = readDB();//in array form DATA
    const user = account.find((a)=>a.accountNumber == accountId);
    res.json(user);
})


//account creation
app.post("/user",(req,res)=>{
    const user = req.body;
    const account = readDB();
    account.push(user);
    writeDB(account);

    res.json(user);

})


//deete the user data
app.delete("/user/",(req,res)=>{
    const accountId = req.body.accountNumber;
    const account = readDB();
    const newaccount = account.filter((a)=>a.accountNumber!=accountId);
    //account ko filter out karrdo jo account ID se match nahi karrte 


    writeDB(newaccount);
    res.send("information deleted Sucessfully");
})

//balace update
app.patch("/user",(req,res)=>{
    const balanceUpdate = req.body.balance;
    const accountId = req.body.accountNumber;

    const account = readDB();
    const user = account.find((a)=>a.accountNumber == accountId);
    user.balance+=balanceUpdate;

    writeDB(account);
    res.send("balance Update Sucessfully");
})



app.listen(3000,()=>{
    console.log("Hello man port listening at 3000")
})














//testing on postman 
//body -> JSON -> RAW
// {
//     "name": "Ankita Biswal",
//     "accountNumber": "39852",
//     "city": "Puri",
//     "age": 20,
//     "balance": 20000
// }


//for path 
// http://localhost:3000/user
// {
//     "accountNumber": "3445",
//     "balance": 10000
//   }

//For Delete account 
// http://localhost:3000/user

// {
//     "accountNumber": "3445"
//   }

