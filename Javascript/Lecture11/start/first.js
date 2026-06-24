// console.log("Haan bhai kaise ho");


// console.log(element.textContent)

// element ek object hai

// const element  = document.getElementById('first');

// const element = {
   
// onclick: ()=>{
//    element.style.backgroundColor = "pink";
// }

// }



// element.onclick = ()=>{
//     element.textContent = "Vijay bhai kaise ho";
//     element.style.backgroundColor = "pink";
// }



// element.onclick = ()=>{

// }


// element.onclick = function handleClick(){
//     element.textContent = "Vijay bhai kaise ho"
// }





// select the element
// const element = document.getElementById('first');

// const element = {
//   
// addEventListener: function(str,callback){

//     if(str=='dblClick')
//         callback();
//     else if(str == 'click')
//         callback()
// }

// }

// 


// event hoga, execute the callback function:

// element.addEventListener('dblclick',()=>{
//     element.textContent = "I am best";
//     element.style.backgroundColor = 'pink'
// })




// console.log("Hann bhaiii kese ho");
// console.log("Hey chandan");
// const a = document.getElementById('first') //it return as a object element '
// console.log(a.textContent);
// a.textContent = "Hello Dipsa";







// const a = document.getElementById('first');
// //on a it store the object whiele chaning it focous override properties 
// a.onclick =()=>{
//     a.textContent="Hello Ankita";
//     a.style.backgroundColor= "pink";
// }

// // handleClick();





//modern methid //first select the element 
const a = document.getElementById('first');
//add then event lisenter .the event is click then it will execute the call back function, here is the callback function 
// a.addEventListener('click',()=>{
//     a.textContent="Hello Dipsa";
//     a.style.backgroundColor= "green";
// })
a.addEventListener('dblclick',()=>{
    a.textContent="Hello Dipsa";
    a.style.backgroundColor= "green";
})

