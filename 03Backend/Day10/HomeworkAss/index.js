import express from "express"
import mongoose from "mongoose"
import Product from "./productScheema.js";
import Products from "./products100.json" with {type:"json"};//are bhaii wo product wala json pe so tujhe type "json" bhi lagana padyega re 
const app = express();
await mongoose.connect("mongodb+srv://chandanzx1:chandanUserXYZ@cluster0.bpfqkoy.mongodb.net/assignmentHomework")
app.use(express.json());



//attention 
//product -> url basis and Product for database

//Create product
app.post("/products",async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json({
            message:"Your product was Inserted",
            product:product
        });
    }catch(error){
        res.status(404).json({
            message:"Unable to Insert your Product",
            error:error.message
        })
    }
})






//for bulk insert
app.post("/products/bulk",async (req,res)=>{
    try{
        const products = await Product.insertMany(Products);
        res.status(201).json({
            message:"Your Bulk Product Was Inserted",
            products:products
        });
    }catch(error){
        res.status(404).json({
            message:"HUAHAUHUAH",
            error:error.message
        })
    }
})

//  Get all products
app.get("/products", async (req,res)=>{
    try{
        const products = await Product.find({});
        res.status(202).json({
            message:"Product was called",
            products:products
        })
    }catch(error){
        res.status(404).json({
            message:"Auuch Product was not found",
            error:error.message
        })
    }
})

// Search products by brand -> GET /products/search/brand?brand=apple
app.get("/products/search/brand", async (req, res) => {
    try {
        const brand = req.query.brand?.toLowerCase().trim();

        if (!brand) {
            return res.status(400).json({
                message: "brand query parameter is required"
            });
        }

        const products = await Product.find({ brand: brand });
        res.status(200).json({ products: products });
    } catch (error) {
        res.status(500).json({
            message: "Unable to search products by brand",
            error: error.message
        });
    }
});

// Search products by category -> GET /products/search/category?category=electronics
app.get("/products/search/category", async (req, res) => {
    try {
        const category = req.query.category?.toLowerCase().trim();

        if (!category) {
            return res.status(400).json({
                message: "category query parameter is required"
            });
        }

        const products = await Product.find({ category: category });
        res.status(200).json({ products: products });
    } catch (error) {
        res.status(500).json({
            message: "Unable to search products by category",
            error: error.message
        });
    }
});

// Search available products -> GET /products/search/available
app.get("/products/search/available", async (req, res) => {
    try {
        const products = await Product.find({ isAvailable: true });
        res.status(200).json({ products: products });
    } catch (error) {
        res.status(500).json({
            message: "Unable to search available products",
            error: error.message
        });
    }
});

// Get product by MongoDB id
app.get("/products/:id",async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product was not found" });
        }

        res.status(200).json({
            message:"Here is your required product",
            product:product
        });
    }catch(error){
        res.status(400).json({
            message:"Invalid ID",
            error:error.message
        });
    }
});

// Get product by slug -> http://localhost:3000/products/slug/iphone-16
app.get("/products/slug/:slug", async (req,res)=>{
    try{
    const product = await Product.findOne({
        slug: req.params.slug   //findOne needs always filter object 
    });
    if(!product){
        return res.status(404).json({
            message:"Product was not Found"
        })
    }
    res.status(200).json({
        product:product
    })
    }catch(error){
       res.status(404).json({
        message:"Not Fund soja bhai",
        error:error.message
       })
    }

})

// Update product by slug 
app.patch("/products/slug/:slug", async (req,res)=>{
    try {
    const product = await Product.findOneAndUpdate(
        { slug: req.params.slug },
        req.body
    );

    if(!product){
        return res.status(404).json({
            message:"Product was not Found"
        });
    }

    res.status(200).json({
        message: "Product was updated",
        product:product
    });
    } catch(error) {
       res.status(400).json({
        message:"Unable to update product",
        error:error.message
       });
    }
});




// Delete product by slug -> DELETE /products/slug/:slug
app.delete("/products/slug/:slug", async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({
            slug: req.params.slug
        });

        if (!product) {
            return res.status(404).json({
                message: "Product was not found"
            });
        }

        res.status(200).json({
            message: "Product was deleted",
            product: product
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to delete product",
            error: error.message
        });
    }
});







app.listen(3000,()=>{
    console.log("Hello man Server is listening you at port 3000");
})
