// Number

// let num = 10.39148342;
// // let answer = num.toFixed(2);
// let answer = num.toPrecision(5);

// console.log(answer);

// let a = Number("10av");
// console.log(0/0);
// NaN, infinitey, -infinity


// Bewkoof log hote hai jo aise hi hurkat karte hai

// let num1 = new Number(10);
// let num2 = new Number(10);
// // new keyword: wo aapke liye object create karta hai

// console.log(num1==num2);

// Avoid this< dont create number using new Keyword


// new Object: Math

// OTP generate kar sakte hai...

// let a = 23;

// a = a*-1;
// console.log(a);

// console.log(Math.abs(23))
// console.log(Math.LN10)
// console.log(Math.LOG2E)
// console.log(Math.floor(2.3));
// console.log(Math.ceil(-5.3));


// console.log(Math.random());
// [0,1)
// console.log(Math.floor(Math.random()*10 + 2))


// Math.floor(Math.random*(max-min+1)+min);
// console.log(Math.floor(Math.random()*6 +2));

// Math.floor(Math.random*(totalNumbergenerated)+ shift)

// Math.floor(Math.random*(max-min+1)+min)


// 37 - 48

// console.log(Math.floor(Math.random()*(48-37+1)+37));


//  Math.random [0,1)

// console.log(Math.random());

// 1000-9999: 
// console.log(Math.floor(Math.random()*(9999-1000)+1000));


// Every ride ke liye different OTP chaiye? 

// Uber: Same otp karne lag gaya  , Rapido: 1010
// OTP: Phone Number ==> Relationship hota hai?
// Switch off hogya, Driver ko OTP bata paaya, us case mein kya hoga?
// Real life learning?????
// 0000-9999: Homework: 4 digit display karani hai, got it?


// String:


// //Number 
// let num = 10.224932;
// console.log(num.toFixed(2));
// let ans = num.toFixed(2);
// console.log(typeof(ans)); // It is a string 
// console.log(num); //it doesnot chahge the orginal value of NUM 

//Number 
// let num = 10.224932;
// console.log(num.toPrecision(2));
// let ans = num.toPrecision(2);
// console.log(typeof(ans)); // It is a string 
// console.log(num); //it doesnot chahge the orginal value of NUM 


// let a = Number(10);
// console.log(typeof(a));


// console.log(10/0);
// console.log(-10/0);
// console.log(0/0);





//dont create number like below it create a object 
// new keyWord -> it is a object creation 
// let num1 = new Number(10);
// let num2 = new Number(20);
// console.log(typeof(num1));
// console.log(num1);
// console.log(typeof(num2));
// console.log(num2);
// console.log(num1 == num2 );  //It return false 




//new Object Math 
//


// let a  = -23;
// a = a*(-1);
// console.log(a);


// console.log(Math.abs(-23));
// console.log(Math.LN10); //Ln 10 

// console.log(Math.LOG2E) //Log 2 base 2




// console.log(Math.floor(2.353))
// console.log(Math.floor(-2.353))
// console.log(Math.ceil(2.353))


// console.log(Math.random()); // It create a random value from [0,1)



// console.log(Math.random()*10);// It start now  0 to 10 



// console.log(Math.floor(Math.random()*10));// It start now  0 to 10 
// console.log(Math.ceil(Math.random()*10));// It start now  0 to 10 




// from 1  to 10 
//  console.log(Math.floor(Math.random()*10+1));// It start now  0 to 10 




// from 1 to 6  
//there are  6 unique digit   so 
// console.log(Math.floor(Math.random()*6+1));





// formula
// Mathfloor(Math.random()*(TotalNuumberGenerated + shift))
// TotalNuumberGenerated = (max-min+1)   || Shift  = min 
// Mathfloor(Math.random()*(max-min+1)+min)





// 37 to 48 
// console.log(Math.floor(Math.random()*(48-37+1)+37))







// majje karrne he   OTP generate kara bina bakchodi ke 
// print from ( 10000 - 32923483)  random value
// console.log(Math.floor(Math.random()*(32923483-10000)+10000) );

//but we did not use this fuxk things to generate the Otp 
// here we use Crypto Library 


// let num = Number(0000);
console.log(Math.celi(Math.random()*(9999-1111)+1111) );