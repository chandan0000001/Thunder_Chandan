// // const button1 = document.getElementById('first');
// // const button2 = document.getElementById('second');
// // const button3 = document.getElementById('third');

// // button1.addEventListener('click',()=>{
// //     console.log("First is clicked");
// // })

// // button2.addEventListener('click',()=>{
// //     console.log("Second is clicked");
// // })

// // button3.addEventListener('click',()=>{
// //     console.log("Third is clicked");
// // })


// setInterval(()=>{
//     console.log("Hello");
// },2000);

const button1 = document.getElementById('first');
const button2 = document.getElementById('second');
const button3 = document.getElementById('third');

button1.addEventListener('click' , ()=>{ //web api listen this  -> when click call back run->  eventloop check call stack is empty -> event loop run when code arises in call stack  which  call to the {show the first clicked } 
    console.log("First Clicked")
})
button2.addEventListener('click' , ()=>{
    console.log("Second Clicked")
})
button3.addEventListener('click' , ()=>{
    console.log("Third Clicked")
})

