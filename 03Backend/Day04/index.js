
const database = [{name: "chandan",age:10,email:"adf@gmail.com"}
    ,{name: "mohh",age:13,email:"adfzvcv@gmail.com"}
    ,{name: "rahul",age:32,email:"aasdfafv@gmail.com"}];


const http = require('http')
const url = require('url');
const server = http.createServer((req,res)=>{
const parsed = url.parse(req.url, true);
const operation = parsed.pathname.slice(1);
const user = parsed.query;
    
    //for prining log 
    console.log(req.url);

function createUser(user) {
        user.age = Number(user.age);
        database.push(user);
    }
function deleteUser(user) {
        for (let i = 0; i < database.length; i++) {
            if (database[i].email == user.email) {
                database.splice(i,1);
                break;
            }
        }
    }

function patchUpdate(user) {
        for (let i = 0; i < database.length; i++) {
            if (database[i].email == user.email) {
                if (user.name)
                    database[i].name = user.name;
                if (user.age)
                    database[i].age = Number(user.age);
                break;
            }
        }
    }

function putUpdate(user) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].email == user.email) {
                 database[i] = {
                    name: user.name,
                    age: Number(user.age),
                    email: user.email
                };
                break;
            }
        }
    }



if (operation == "createUser") {
        createUser(user);
        res.end("User Created");
        return;
    }
else if(operation=="deleteUser") {
             deleteUser(user);
            res.end("User Deleted");
            return;
    }

else if(operation == "patchUser") {
        patchUpdate(user);
        res.end("User Updated");
        return;
    }

else if(operation == "putUser") {
        putUpdate(user);
        res.end("User Replaced");
        return;
    }

else if(operation=="getUser") {
        res.end(JSON.stringify(database));
        return;
    }

res.end("Invalid Route");

});

server.listen(3000, () => {
    console.log("Server is listening at 3000");
});



//get user 
// http://localhost:3000/getUser
// create user
// http://localhost:3000/createUser?name=oxen&age=20&email=oxen@gmail.com
//delete user
// http://localhost:3000/deleteUser?email=oxen@gmail.com
// patch user
// http://localhost:3000/patchUser?email=adf@gmail.com&age=50
// http://localhost:3000/patchUser?email=adf@gmail.com&name=Chandan
// put user
// http://localhost:3000/putUser?name=Rahul&age=35&email=adf@gmail.com