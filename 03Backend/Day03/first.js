 // 1.0.0
 // patch:bug fixes 1.0.1
 //minor update (added multipllication ) 1.1.0

 //major update > 2.0.0 existing functionality can be break 
 function add(num1,num2,num3){
    if(typeof(num1) == "number" && typeof(num2) == "number" && typeof(num3))
    return num1+num2

}
function sub(num1,num2){
    if(typeof(num1) == "number" && typeof(num2) == "number")
    return num1-num2;
}

function mul(num1,num2){
    if(typeof(num1) == "number" && typeof(num2) == "number")
    return num1 * num2;
}
function div(num1,num2){
    if(typeof(num1) == "number" && typeof(num2) == "number")
    return num1 / num2;
}

function square(num1){
    return num1*num1;
}
module.exports = {add,sub,mul,div,square};