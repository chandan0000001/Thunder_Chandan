const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const h1 = document.querySelector('h1');



let count = 0;
bt1.addEventListener('click',()=>{
    count++;
    h1.textContent=`Counter is: ${count}`;
})
bt2.addEventListener('click',()=>{
    if(count==0) return ;// this is for handel the negative value whnr count is 0 then is doenot decreased 
    count--;
    h1.textContent=`Counter is ${count}`;
})