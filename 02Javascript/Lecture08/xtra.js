function sum (...numbers){
    console.log(numbers); // rturn array 
    return numbers.reduce((total,numbers)=>total+numbers,0);
}
console.log(sum(1,2,3,4,5));

//tum call karte ho sum(1,2,3,4,5); but internaly javascript usse numbers= [1,2,3,4,5] pe convert karr ta he 
//abb reduce kii batt karrte he 

//syntax
// array.reduce((accumulator, currentValue) => {
//     // logic
// }, initialValue);

//so here total is accumulator and numbers is current array element initial value is 0 
//execution step by step 

// [1,2,3,4,5]
// initial statge 
// total = 0
// first iteration 
// total = 0 , nmber =  1 so 0 + 1 = 1
// new total = 1

//second
// total = 1 , number = 2 so new total is 1+2 =3

//Third 
//total = 3 , nmber = 3 so the new total is 3+3 = 6 ;

//fourth 
// total=6 , number = 4 so the new otal is 6+4 = 10

//five
//total = 1- , number = 5 so the new total is 15 

//return that 15 



//for onbject 
const person = {
    name:"Chandan",
    age:23,
    city:"Banglore",
    country:"USA"
}
const {name, ...extra} = person;
//name catch the name variable in the on=bject and reest element are catch by the ...extra
console.log(name);
console.log(extra);
//Chandan
//{ age: 23, city: 'Banglore', country: 'USA' }