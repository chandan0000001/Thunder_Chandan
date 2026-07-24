// zomato blinkit merger:


// function zomatoRestaurant(){
//     console.log("Restaurant is preparing the order");
// }

// function blinkitWarehouse(){
//     console.log("Packing the orde for user");
// }



// function payment(amount, Callback){
//     console.log(amount, "Payment is happenning");
//     console.log("Payment is done");
//     Callback();

//     // GST
//     // Commision payment calculate
// }


// payment(500,zomatoRestaurant);
// payment(1000,blinkitWarehouse);
// // payment(2000,temple);







function temple(){
    console.log("Scam Hogaye lalala");
}

function zomatoRestaurant(){
    console.log("Resturant is preparing the oder ");
}

function blinkitWarehouse(){
    console.log("Packing the user ");
}

function Payment(amount,callback){
    console.log(amount, "Payment is Happening ")
    console.log("Payment is done");
    //call to returant placed oder 
    // zomatoResturant();
    callback();
    //GST
    //COMMISSION PAYMENT GATEWAY
}

Payment(500,zomatoRestaurant);
Payment(1000,blinkitWarehouse);
Payment(200,temple)