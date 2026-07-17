//for strong password 
//char length 8 
//capital lettr
//samll letter
//special char
//number 


const input = document.getElementById('pass');
input.addEventListener('input', ()=>{
    const password = input.value;
    // console.log(password)

    if(password.length < 8 ){
        const dis = document.querySelector('h3');
        dis.textContent = "Week";
        dis.style.color= "red";
        dis.style.backgroundColor="black";
        return;
    }

    let hasCapital = false, hasSmall = false, hasNumber = false, hasSpecial=false;
    for(let i =0 ; i <password.length;i++){
        let ch = password[i];

        if(ch >= `A` && ch<=`Z`)
            {
                 hasCapital=true 

            }
           else if (ch >= `a` && ch<=`z`){
             hasSmall=true }
            else if(ch>= '0' && ch<='9'){
                hasNumber=true;
            }
            else{
                hasSpecial=true;
            }

    }

    if(hasCapital && hasSmall && hasNumber && hasSpecial){
        //Ui pe show karoi strong 
        const dis = document.querySelector('h3');
        dis.textContent = "Strong";
        dis.style.color= "green";
        dis.style.backgroundColor="BLACK";
    }

})