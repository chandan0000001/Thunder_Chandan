const boy =  document.getElementById("boy")
const gitl= document.getElementById("girl");

const button = document.querySelector('button');

const h4 =  document.querySelector('h4');



button.addEventListener(`click` ,()=>{
    const val1 = boy.value.length;
    const val2 = gitl.value.length;

    const result = (val1*val2*val1*val2)  % 101;
  
    h4.textContent = `Result is : ${result}%`
})