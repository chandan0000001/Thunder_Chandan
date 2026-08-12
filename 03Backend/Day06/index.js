import exprees from 'express';
import {products} from './data.js'
const app = exprees();
app.use(exprees.json());






//now add multiple filtter this called route parameter 
app.get("/product" , (req,res)=>{

    const {price,rating,category,brand,inStock} =req.query;
    let filterData = products;
    if(price){ filterData=filterData.filter((p)=>p.price>=price)};
    if(rating){ filterData=filterData.filter((p)=>p.rating>=rating)};
    if(category){ filterData=filterData.filter((p)=>p.category==category)};
    if(brand) { filterData=filterData.filter((p)=>p.brand==brand)};
    if(inStock){ filterData=filterData.filter((p)=>p.inStock==inStock)};

    res.json(filterData);
})
//rout parameter > ":"
app.get("/product/:id",(req,res)=>{
    // const index = req.params.id;
    // res.json(products[index-1]);
     const id = req.params.id;
    const p = products.find((p1)=>p1.id == id);
    if(p){
        res.json(p);
    }
    else{
        res.send("Product is not Found ")
    }
})


app.patch("/product" , (req,res)=>{
    const data = req.body;
    const fetchProduct = products.find((p)=>p.id == data.id);
    if(fetchProduct){
    Object.assign(fetchProduct,data);
    res.send("Product is Updated sucessfully")
    }else{
        res.send("Product is not Found");
    }
})

app.post("/product",(req,res)=>{
    products.push(req.body);
    res.send(req.body);
})


app.delete("/product/:id", (req,res)=>{
    const id = req.params.id;
    const index = products.findIndex((p1)=>p1.id == id);
    if(index>0){
         const p = products.splice(index,1);res.json(p);
    }else{
        res.send("Product is Not Found")
    }
   
})



//now add filter which called as query parameter  first add which prize greater than 5000 rs 
app.get("/product",(req,res)=>{
    const { price } = req.query;
    const filterData = products.filter((p)=>p.price>price); //jika price 5000 se jyada he 
    res.json(filterData);
})



app.listen(3000,()=>{
    console.log("server is Listening at 3000 port")
})