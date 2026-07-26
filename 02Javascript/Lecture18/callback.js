// call back hell

//Zomato application 
// placeOder 
// prepareOder 
// pickUpOder
// DeliverOder

const orderDetail = {
    oderId :234354657,
    user: "Dipesh",
    price:1235,
    food : ["Biriyani", "soup" , "panner"],
    price:1090, 
    payment_status : false,
    token_asign : false,
    resturant_location : "New Delhi",
    coustumer_location : "Odisha",
    pickOder : false
}

function placeOder (orderDetail,Callback){
    console.log(`Payment Of ${orderDetail.price} rs in progress`);

    setTimeout(()=>{
        console.log("Payment is completed")
        orderDetail.payment_status = true;
        Callback(orderDetail);
    },1300)
}

function prepareOder(orderDetail, Callback){
    console.log(`Restureant recived the oder and preparing ${orderDetail.food}`)

    setTimeout(()=>{
        console.log("Your Oder is preapred now "),
        orderDetail.token_asign = 345;
        Callback(orderDetail);
    },1000)
}

function pickUpOder (orderDetail, Callback){
    console.log(`Deliver boy is on the way to pick oder from ${orderDetail.resturant_location}   `);

    setTimeout(()=>{
        console.log("Delivery Boy reached the resturant ")
       orderDetail.pickOder = true;
        Callback(orderDetail);
    },1500)
} 

function deliverOrder(orderDetail,Callback){
    console.log(`Deliver boy Picked the oder from the resturant  and deliver to the  ${orderDetail.coustumer_location}`);
    setTimeout(()=>{
        console.log("Delivery Boy delivered the oder to the customer")
        Callback(orderDetail);
    },1790)
}

// function bill_gen () {
//     console.log(orderDetail);
// }

placeOder( orderDetail,()=>{
    prepareOder(orderDetail,()=>{
        pickUpOder(orderDetail ,()=>{
            deliverOrder(orderDetail,()=>{
                // bill_gen();
            });
        });
    });
});
