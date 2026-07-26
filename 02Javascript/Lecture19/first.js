// console.log(window); //check browser bcz it is not a browser enviroment it is Node js enviroment 
//node js create a global image and that named as "global" object 
// console.log(global); //output below broser shows global not define 
// globalThis  it is poit to the global object of the respective env 
// console.log(globalThis); // this is commmon for browse and vs code too it point global object 
//Window : it is global object in browser
//globl : it is a global object in node js env 



// "use strict"  //for strict mode js 
// d = 10 ;
// console.log(d)

// function add (num,num){
//    return num + num ;
// }
// console.log(add(23,334));


//non strict mode and strict mode 
//window pe this key word pooint to global object 
// Node js  this key word ppint to empty object 
// "use strict"  //
// console.log(this) //


//Inside a method this key word will point to the object who invoed that method true for window and node js mode 
// "use strict" 
// const user1 = {
//    name:"Chandan",age:12
// ,
// greet: function(){
//    console.log(this);
// }}

// user1.greet();



//here we can see the it it invoke by nothing  so it invoke by the respective global but in in "Use strict"  mode it is undefined
// "use strict"
// function greet(){
//    console.log(this)
// }
// greet()




// const user1 = {
//    name:"chandan",
//    age:10
// }

// const user2 = {
//    name:"chandan",
//    age:10,
//    amount:323
// }
// function increment(uamr,paisa){
//    this.age=uamr;
//    this.amount+=paisa;
// console.log(this);}

// increment.call(user2,30,200)

// increment.apply(user2,[30,200])

// const ref = increment.bind(user2,30,200)
// ref();




//arrwo function :  this is not contain this keyword it same as the global obj and node js object 

//strict ho ya non strict hoo arrw function borrow this kkey word outer nearest object 

// const user = {
//    name:"Chandan",
//    age:29,
//    increment: ()=>{
//       this.age++
//    }
// }
// user.increment();
// console.log(user.age);





// "use strict"
// function greet(){
//    const a =  ()=>{
//       console.log(this);
//    }
//    a();
// }greet()

//a borrow  from the greet 





const watch = {
   timer : 0 ,
   stopwatch: function (){
      setInterval(()=>{
         this.timer++
         console.log(this.timer);
      },0)
   }
}
watch.stopwatch();


