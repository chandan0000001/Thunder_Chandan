// console.log(document);
//Check above command in console web mode

//QuerySelector HTML me kisi element ko dhoondta hai.
//syntax is 
// document.querySelector();


//1st example select element
// const heading = document.querySelector("h1");
// console.log(heading);


//2nd example  it only select 1s t element 
const headingx = document.querySelector("h1");
headingx.style.border = "2px solid green";
headingx.style.color = "orange";
console.log(headingx); // Sirf first wala.  <h1 id="heading" style="color: blanchedalmond;"> Wealcome to javaScript </h1>

//3rd example 
const idx = document.querySelector("#para"); //for ID we use "#" for determination 
idx.style.border= "3px solid yellow"
console.log(idx);

//4th example 
const classx = document.querySelector(".info") //for Class we use "." fro determination 
classx.style.border="3px solid blue";
console.log(classx);





//select button element 
const buttonx = document.querySelector("button");
buttonx.style.border = "5px solid brown";

//for slecting hey , hello , hooo
const i1 = document.querySelector("#i1");
i1.style.border = "5px solid red"
const i2= document.querySelector("#i2");
i2.style.border = "8px solid yellow";
const i3=document.querySelector("#i3");
i3.style.border = "9px solid blue";