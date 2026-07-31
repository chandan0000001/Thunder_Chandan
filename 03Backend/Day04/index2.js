const db = [{name:"Chandan",age:29,email:"adhf@gmail.com"},
    {name:"SaiGod ",age:29,email:"sai@gmail.com"},
    {name:"Raj ",age:29,email:"raj@gmail.com"},
    {name:"Rakesh ",age:29,email:"rakesh@gmail.com"},
    {name:"Danis ",age:29,email:"danis@gmail.com"}
]

//here below you are saying Node Mujhe HTTP wala toolbox dedo 
const http = require('http');
// Browser send this -> "createUser?name=abc&age=20" we need to break this
// Path
// createUser
// Query
// name=abc
// age=20
const url = require('url');
 
const server = http.createServer((req,res)=>{
    // Request ki saari information isi object me hai.
    // res.end("Hello suraj man");

const parsed = url.parse(req.url,true);
//url.parse tod deta hai.
//parsed =
// {pathname:"/createUser",
// query:{
// name:"Raj",
// age:"20",
// email:"a@gmail.com"
//    }
//   }

const operation = parsed.pathname.slice(1);
//if path is /createUser convert into createUser
const user = parsed.query;
//so now user = 
// {name:"Raj",age:"20",email:"abc@gmail.com"}  //here "20" is string not a number 


//for create user 
function createUser (user){
    user.age=Number(user.age); //browser string bhejj ta he uss e number pe convert karrna he 
    db.push(user);
}

//for delete user 
function deleteUser(user){
    for(let i=0;i<db.length;i++){
        if(db[i].email == user.email){
            db.splice(i,1);
            break;
        }
    }
}

//for making the small changes vrify with email 
function patchUser(user){
    for(let i=0;i<db.length;i++){
        if(db[i].email==user.email){
            if(user.name){
                db[i].name=user.name;
            }
           if(user.age){
             db[i].age=Number(user.age);
           }   
          break;
        }    
    }
}


//put update this is use for make the complete chages -> name age email
function putUser(user){
    for(let i =0;i<db.length;i++){
        if(db[i].email==user.email){
            db[i]= {
                name: user.name,
                age: Number(user.age),
                email:user.email   
            };
            break;
        }
    }
}



if(operation == "createUser"){
    createUser(user);
    res.end("user created");
    return;
}
else if(operation == "deleteUser"){
    deleteUser(user);
    res.end("User is Deletd");
    return;
}
else if(operation == "patchUser"){
    patchUser(user);
    res.end("User patched or updated");
    return;
}
else if(operation == "putUser"){
    putUser(user);
    res.end("User is replaced or putUser option is satisfied");
    return;
}
else if(operation == "getUser"){
    res.end(JSON.stringify(db));
    return;
}
res.end("Invalid route");
})




server.listen((3000),()=>{
    console.log("Server is Listening at 3000")
})