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

function placeOder (orderDetail){
    console.log(`Payment Of ${orderDetail.price} rs in progress`);

    return new Promise((resolve , reject)=>{
          setTimeout(()=>{
        console.log("Payment is completed")
        orderDetail.payment_status = true;
       resolve(orderDetail);
    },1300)
    })
  
}

function prepareOder(orderDetail){
    console.log(`Restureant recived the oder and preparing ${orderDetail.food}`)

    return new Promise((resolve , reject)=>{ 
         setTimeout(()=>{
        console.log("Your Oder is preapred now "),
        orderDetail.token_asign = 345;
        resolve(orderDetail);
    },1000)
    })
   
}

function pickUpOder (orderDetail){
    console.log(`Deliver boy is on the way to pick oder from ${orderDetail.resturant_location}   `);
    return new Promise((resolve , reject)=>{ 
         setTimeout(()=>{
        console.log("Delivery Boy reached the resturant ")
       orderDetail.pickOder = true;
       resolve(orderDetail);
    },1500)
    })
   
} 

function deliverOrder(orderDetail){
    console.log(`Deliver boy Picked the oder from the resturant  and deliver to the  ${orderDetail.coustumer_location}`);
    return new Promise((resolve , reject)=>{ 
         setTimeout(()=>{
        console.log("Delivery Boy delivered the oder to the customer")
        resolve(orderDetail);
    },1790)
    })

}


placeOder(orderDetail)
.then((orderDetail)=>{
    return prepareOder(orderDetail);
})
.then((orderDetail)=>{
    return pickUpOder(orderDetail);
})
.then((orderDetail)=>{
    return deliverOrder(orderDetail);
})

.then((orderDetail)=>{
    console.log(orderDetail)
})                                                                                      