const h1 = document.querySelector('h1');

//setInterval (callBack , timer (millisecond))
 setInterval(()=>{

   let time =  new Date();
h1.textContent=time.toLocaleString(); 
 } ,1000)


// setInterval  it execute after respective each section 
// setTimeout it execurte only one time as per the milisecond 
