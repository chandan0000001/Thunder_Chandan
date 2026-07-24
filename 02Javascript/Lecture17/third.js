// class and object
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hii ${this.name} your age is ${this.age}`);
    }
}

const user1 = new Person("Chandan" , 13);
console.log(user1);


class Customr extends Person {
    constructor(name,age,balanace,city){
        super(name,age);
        this.balanace=balanace;
        this.city=city;
    }

}

const c1 = new Customr("chandan",12,1234,"Mumbai");
console.log(c1);