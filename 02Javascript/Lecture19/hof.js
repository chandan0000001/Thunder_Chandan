//Hiigher oder function 
function increment (amount){
    function mul(num){
        console.log(num*amount);
    }
    return mul;
}
// const multipler = increment() //it return refrance of mul
// const multipler = increment(30) 
// multipler(10);


increment(30)(10) //300