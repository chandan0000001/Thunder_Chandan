 
 
//  function zomatoResturant(){
//     console.log("Resturant is preparing the oder");
//  }
//  //zomato having function name is payment 
//  function payment(amount){
//     console.log(amount , "Payment is Happening");
//     console.log("Payment is Done");
//     //oder ko place karo 
//     zomatoResturant();
//  }
//  payment(500);




 //zomato ke sath blinkit attach ho gayaa and dodno same payment gateway use karrna he 



//  function zomatoResturant(){
//     console.log("Resturant is preparing the oder");
//  }

//  function blinkitWareHouse(){
//     console.log("Packing the oder for the user");
//  }
 
//  //zomato having function name is payment 
//  function payment(amount){
//     console.log(amount , "Payment is Happening");
//     console.log("Payment is Done");
//     //oder ko place karo 
//     zomatoResturant();
//  }

//  payment(500);
//  payment(100);


 //above is hardcoded let optimize this by call back 
 
 function zomatoResturant(){
    console.log("Resturant is preparing the oder");
 }

 function blinkitWareHouse(){
    console.log("Packing the oder for the user");
 }
 
 //zomato having function name is payment 
 function payment(amount ,callBack){
    console.log(amount , "Payment is Happening");
    console.log("Payment is Done");
    //oder ko place karo 
    callBack();
 }

 payment(5000 ,zomatoResturant );
 payment(1000 ,blinkitWareHouse );
