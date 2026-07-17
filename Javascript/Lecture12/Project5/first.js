const textar = document.getElementById(`comment`)
const wordCnt = document.querySelector('h3');
const textCnt = document.querySelector(`h2`);


textar.addEventListener(`input`, ()=>{
    const text = textar.value;
    const totaltext = text.trim();

    //by space 
    // const arr = totaltext.split(" ");  //["chandan" , "Kumar" , "Dalai"]
    const arr = totaltext.split(/\s+/);  //["chandan" , "Kumar" , "Dalai"]
    console.log(arr);
    textCnt.textContent = `TextCount : ${totaltext.length}`;
    if(totaltext==="") 
        wordCnt.textContent = `WordCount : 0;`
    else 
        wordCnt.textContent = `WordCount : ${arr.length};`
})