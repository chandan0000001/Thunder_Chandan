
// // var: Block scope izzat ni karta, functional scope ki respect karta hai

// // if(true){
// //     var d = 9;
// // }


// // let a = 10;
// // const b = 20;
// // function greet(){
// //     let d = 10;
// //     console.log("hello");
// // }


// // greet();
// // console.log(d);



// // let a = 10;


// // function greet(){
  
// //     let a = 90;
// //    function meet(){
// //         let a = -5;
// //         console.log(a);
// //    }

// //    meet();

   
// // }

// // greet();



// function counter(){
    
//     let count = 0;
  
//     function increment(){
//         // console.log("I am incremented");
//         count++;
//         console.log(count);
//     }

//     return increment;
// }


// const c = counter();
// c();
// c();









// let a = 10 ;
// const b = 20;
// var c = 30 ; //it doesnot care about block scope it respect only function al scope
// // let const already care about functional scope and block scope  

// if(true){
//     var d = 18;
// }
// // function greet(){
// //     var r = 5;
// // }
// console.log(a,b,c,d,r);


// let a = 10 
// function greet(){
//     let a = 27 //you can declare a in this scope 
//     console.log(a);
// }
// greet();

function counter(){
    let count = 0 ;
    function increment (){
        count++;
        console.log(count);

    }
    return increment;
}
const  c = counter();
c();
c();
c();
c();
c();
c();
