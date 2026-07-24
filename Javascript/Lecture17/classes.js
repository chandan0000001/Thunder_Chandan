// const user1 = {
//     name:"Chandan",
//     age:32,
//     city:"Delhi"
// }

// const user2 = {
//     name:"Mohan",
//     age:11,
//     city="cutttack"
// }
// const user3 = {
//     name:"Dipsa",
//     age:33,
//     city:"Hyderbad"
// }

//for createing multiple objext having same pair (name,age,city)
//we nwed to create a blue print where peresent [name,age,city]


class Person {
    constructor(a,b,c){
        this.name=a,
        this.age=b,
        this.city=c
    }
    
}

const userx = new  Person("Chandan",21 ,"Cuttack");
const usery = new  Person("Rahul",22,"Cuttack");
const userz = new  Person("Rakesh",51,"Cuttack");
const usera = new  Person("Mohan",20,"Cuttack");
console.log(userx,usery,userz ,usera);