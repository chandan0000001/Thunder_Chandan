const body = document.querySelector('body');

const parent = document.getElementById('root');
parent.addEventListener('dblclick',(e)=>{
    //e lake dega event object 
    // console.log(e.target);
    body.style.backgroundColor=e.target.id; //e.target se element milla and .id se color ka data millagya su
})