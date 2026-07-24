

// Unique value provide karta

// {name:"Rohit",age:20}

// const arr = [10,20,30,20,10,12,30,"Rohit","Mohit",70,"Rohit",{name:"Rohit",age:20},{name:"Rohit",age:20},{name:"Rohit",age:20}];


// const s1 = new Set(arr);

// console.log(s1);

// const s1 = new Set();
// s1.add(10);
// s1.add(20);
// s1.add(43);
// s1.add(43);

// console.log(s1.has(20));



// const email = ['rohit@gmail','mohit@gmail.com','sohit@gmail','rohit@gmail','mohit@gmail'];


// const s1 = new Set(email);

// const arr = [...s1];
// console.log(arr);


// //unique value 
// const arr = [12,242,2,4,32,5,2,35,32,53,"chandan","Dipsa","chandan","Chandan" , "Mohit" ,{name:"Rohit",age:20},{name:"Rohit",age:20},{name:"Rohit",age:20}];
// //object ko set apply nahii hottta They are compare by the object 
// const s1 = new Set(arr);
// console.log(s1);





// const s1 = new Set();
// s1.add(10);
// s1.add(20);
// s1.add(43);
// s1.add(43);
// // console.log(s1.has(23));false
// console.log(s1);





// const email = [`rohit@gmail.com`,`Chandhan@gmail.com` ,`ha@gmail.com`,`rohit@gmail.com`,`rohit@gmail.com`,`rohit@gmail.com`]

// const s1 = new Set(email);
// // console.log(s1);
// //se ke andar sare value achuki and now issuye khollke  ke arrY Ke andr dall na he 
// const arrx = [...s1];
// console.log(arrx);



// //create an empty set
// const newSet = new Set();
// //create an array which contain element of an array 
// const arr = [1,21,11,1,32,431,32,11]
// const xSet = new Set(arr);
// console.log(xSet)


// //Crud operation on set 
// const userroles = new Set();

// //.add() for adding new element in the set 
// userroles.add("editor").add("viewer");console.log(userroles);
// userroles.add("editor");console.log(userroles); //so second time editor was ignored because of set

// //.has() = check if element exist or not > ? 
// console.log(userroles.has("admin")); //fasel
// console.log(userroles.has("viewer")); //ture

// //.delete() = used to delete the element from the set 
// userroles.delete("viewer"); //it delete the viewer element 
// console.log(userroles.has("viewer")) 

// //.clear() = usd to delete the entire set  
// userroles.clear();
// console.log(userroles.has("viewer")) //fasle
// console.log(userroles.has("editor")) //fasel


//itreation oover the set 
// const permission = ["read","write","execute"];
// for (const x of permission) {
//     console.log(x);
// }


// realworld example of using set 
const email = [
    "john@gmail.com",
    "alice@yahoo.com",
    "bob@hotmail.com",
    "john@gmail.com",
    "emma@gmail.com",
    "charlie@outlook.com",
    "alice@yahoo.com",
    "david@gmail.com",
    "sophia@gmail.com",
    "bob@hotmail.com",
    "olivia@yahoo.com",
    "liam@gmail.com",
    "emma@gmail.com",
    "noah@outlook.com",
    "ava@gmail.com",
    "mia@yahoo.com",
    "lucas@gmail.com",
    "john@gmail.com",
    "amelia@hotmail.com",
    "james@gmail.com",
    "alice@yahoo.com",
    "harper@gmail.com",
    "elijah@gmail.com",
    "bob@hotmail.com",
    "evelyn@outlook.com",
    "henry@gmail.com",
    "ava@gmail.com",
    "charlotte@yahoo.com",
    "liam@gmail.com",
    "john@gmail.com",
    "grace@hotmail.com",
    "jack@gmail.com",
    "mia@yahoo.com",
    "lucas@gmail.com",
    "emma@gmail.com",
    "olivia@yahoo.com",
    "alex@gmail.com",
    "alice@yahoo.com",
    "david@gmail.com",
    "john@gmail.com",
    "harper@gmail.com",
    "bob@hotmail.com",
    "isabella@gmail.com",
    "charlie@outlook.com",
    "ava@gmail.com",
    "liam@gmail.com",
    "sophia@gmail.com",
    "john@gmail.com",
    "alice@yahoo.com",
    "emma@gmail.com"
  ];
const removeDuplicatesEmails = [...new Set(email)];
console.log(removeDuplicatesEmails);


// let seee another example tracking the unique visitor to page 
const visiTedUser = new Set();

function userVisistes(userID){
    if(visiTedUser.has(userID)){
        console.log(`Wealcome back Old Visitor ID #${userID}`)
        console.log("Fuck You");
    }else{
        visiTedUser.add(userID); //important yadd rakhh le warna abachh tayegas
        console.log(`wealcome The new User. Your Id is # ${userID}!!!`)
    }
}
userVisistes(102);
userVisistes(101);
userVisistes(102);
userVisistes(103);