const Orginaluserx = {
    name:"chandan",
    age:32,
    amount:2183,
    state:"Hariyana",
    vehicle: "Car",
    adress : {
        state: "Odisha",
        blok: "huads"
    },
    number: [23,25,342,2334]
}

const deepclone = structuredClone(Orginaluserx)
deepclone.name="Habiidulla";
deepclone.age = 932;
deepclone.adress.state= "Maharastra";
deepclone.number.push(90);

console.log(Orginaluserx.name);
console.log(Orginaluserx.amount);
console.log(Orginaluserx.age);
console.log(Orginaluserx.adress.state);
console.log(Orginaluserx.number);



console.log(deepclone.name);
console.log(deepclone.amount);
console.log(deepclone.age);
console.log(deepclone.adress.state);
console.log(deepclone.number);


// chandan
// 2183
// 32
// Odisha
// [ 23, 25, 342, 2334 ]
// Habiidulla
// 2183
// 932
// Maharastra
// [ 23, 25, 342, 2334, 90 ]