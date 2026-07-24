const form = document.querySelector('form');
const v1 = document.getElementById(`first`);
const v2 = document.getElementById(`second`);
const p = document.querySelector(`p`);
form.addEventListener(`submit` , (e)=>{
  e.preventDefault();
  const nm1  = Number(v1.value);
  const nm2 = Number(v2.value);
 p.textContent = `Result is:  ${nm1+nm2}`;
})