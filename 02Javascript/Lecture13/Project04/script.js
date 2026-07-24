const h2 = document.querySelector('h2');


// curent date timestamos





setInterval (()=>{
    let curr = Date.now();
    let olympicTime = new Date(2028,6,14).getTime();
    console.log(curr);
    console.log(olympicTime);
    
    
    let remainTime =  olympicTime - curr ;
    const day = Math.floor((remainTime)/(1000*60*60*24));
    remainTime%=1000*60*60*24;
    const hours = Math.floor((remainTime)/(1000*60*60));
    remainTime%=(1000*60*60);
    const min = Math.floor((remainTime)/(1000*60));
    remainTime%=(1000*60)
    
    const second = Math.floor((remainTime)/(1000));
    remainTime%=(1000)
    
    
    h2.textContent = `${day}:Days ${hours}:Hours ${min}:Minutes ${second}:Second`;
},1000)

