const body = document.querySelector("body");
body.style.backgroundColor="black";
body.style.color="white";


// const child1 = document.getElementById('child1');
// const child2 = document.getElementById('child2')
// const child3 = document.getElementById('child3')
// const child4 = document.getElementById('child4')

// click was occured then the fuwill called nction 
// child1.addEventListener('click',()=>{
//     child1.textContent="I am clicked";
// })
// child2.addEventListener('click',()=>{
//     child2.textContent="I am clicked";
// })
// child3.addEventListener('click',()=>{
//     child3.textContent="I am clicked";
// })
// child4.addEventListener('click',()=>{
//     child4.textContent="I am clicked";
// })


// // let optimise this one 
// const parent = document.getElementById("paraent")
// paraent.addEventListener('click',(a)=>{
//     a.target.textContent="i am clicked" //a.target Jis element par click hua
    
// })



//another part
//3 event listner 
//this is called event bubbleing   
// const grandParent = document.getElementById("grandParent");
// const paraent = document.getElementById("paraent");
// const childx = document.getElementById("childx");

// grandParent.addEventListener('click' ,()=>{
//     console.log("Heelo from grandparent");
// },false) //capture value is false it doesnot execute in capctha face it will be execute in bubble phase
// paraent.addEventListener('click' ,()=>{
//     console.log("Heelo from parent");
// },true)
// childx.addEventListener('click' ,()=>{
//     console.log("Heelo from child");
// })

//another part 
const bt = document.querySelector('button');
function handle(){
    bt.textContent= "I love you";
    // Remove the listener so this only happens once per session
    bt.removeEventListener('click' ,handle);
    // Add the listener
}
//button ke upar click karne parr handle ko call hoo jaye 
 bt.addEventListener('click', handle)
