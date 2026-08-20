import express from "express"
import mongoose from "mongoose"
import Product from "./productScheema.js";
import Products from "./products100.json" with {type:"json"};//are bhaii wo product wala json pe so tujhe type "json" bhi lagana padyega re 
const app = express();
await mongoose.connect("mongodb+srv://chandanzx1:chandanUserXYZ@cluster0.bpfqkoy.mongodb.net/assignmentHomework") //here the "/assignmentHomework" -> it use for create or inset inside of it 
app.use(express.json());


//attention 
//product -> url basis and Product for database

// Create product -> POST http://localhost:3000/product
app.post("/product",async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json({
            message:"Your product was Inserted",
            product:product
        })

    }catch(error){
        res.status(404).json({
            message:"Your Product can't be Inserted",
            error:error.message
        })
    }
})


// Bulk insert products -> POST http://localhost:3000/product/bulk
app.post("/product/bulk", async (req,res)=>{
    try{
        const product = await Product.create(Products)
        res.status(200).json({
            message:"Your Bulk Product was inserted",
            product:product
        })
    }catch(error){
      res.status(404).json({
        message:"Failed To insert your Product",
        error:error.message
        })
     
    }
})

// Get all products -> GET http://localhost:3000/products
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








// Search products by brand -> GET http://localhost:3000/products/search/brand?brand=apple
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

// Search products by category -> GET http://localhost:3000/products/search/category?category=electronics
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

// Search available products -> GET http://localhost:3000/products/search/available
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

// Search out-of-stock products -> GET http://localhost:3000/products/search/out-of-stock
app.get("/products/search/out-of-stock", async (req, res) => {
    try {
        const products = await Product.find({ stock: 0 });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Unable to search out-of-stock products", error: error.message });
    }
});

// Search products by brand AND category -> GET http://localhost:3000/products/search/brand-category?brand=apple&category=electronics
app.get("/products/search/brand-category", async (req, res) => {
    try {
        const brand = req.query.brand?.toLowerCase().trim();
        const category = req.query.category?.toLowerCase().trim();
        if (!brand || !category) return res.status(400).json({ message: "brand and category query parameters are required" });

        const products = await Product.find({ brand, category });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Unable to search products", error: error.message });
    }
});

// Search products by brand OR category -> GET http://localhost:3000/products/search/brand-or-category?brand=apple&category=fashion
app.get("/products/search/brand-or-category", async (req, res) => {
    try {
        const brand = req.query.brand?.toLowerCase().trim();
        const category = req.query.category?.toLowerCase().trim();
        if (!brand || !category) return res.status(400).json({ message: "brand and category query parameters are required" });

        const products = await Product.find({ $or: [{ brand }, { category }] });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Unable to search products", error: error.message });
    }
});

const getNumberQuery = (value) => {
    const number = Number(value);
    return value === undefined || value === "" || !Number.isFinite(number) ? null : number;
};

// Search products with price greater than amount -> GET http://localhost:3000/products/search/price-greater-than?amount=50000
app.get("/products/search/price-greater-than", async (req, res) => {
    const amount = getNumberQuery(req.query.amount);
    if (amount === null) return res.status(400).json({ message: "amount must be a valid number" });
    try {
        const products = await Product.find({ price: { $gt: amount } });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Unable to search products", error: error.message });
    }
});

// Search products with price less than amount -> GET http://localhost:3000/products/search/price-less-than?amount=1000
app.get("/products/search/price-less-than", async (req, res) => {
    const amount = getNumberQuery(req.query.amount);
    if (amount === null) return res.status(400).json({ message: "amount must be a valid number" });
    try {
        const products = await Product.find({ price: { $lt: amount } });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Unable to search products", error: error.message });
    }
});

// Search products with price between min and max -> GET http://localhost:3000/products/search/price-between?min=1000&max=50000
app.get("/products/search/price-between", async (req, res) => {
    const min = getNumberQuery(req.query.min);
    const max = getNumberQuery(req.query.max);
    if (min === null || max === null || min > max) return res.status(400).json({ message: "min and max must be valid numbers, with min less than or equal to max" });
    try {
        const products = await Product.find({ price: { $gte: min, $lte: max } });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Unable to search products", error: error.message });
    }
});

// Search products with rating greater than or equal to the given value -> GET http://localhost:3000/products/search/rating?rating=4
app.get("/products/search/rating", async (req, res) => {
    const rating = getNumberQuery(req.query.rating);
    if (rating === null) return res.status(400).json({ message: "rating must be a valid number" });
    try {
        const products = await Product.find({ rating: { $gte: rating } });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Unable to search products", error: error.message });
    }
});

// Search products from multiple categories -> GET http://localhost:3000/products/search/categories?categories=electronics,fashion,books
app.get("/products/search/categories", async (req, res) => {
    const categories = req.query.categories?.split(",").map(category => category.trim().toLowerCase()).filter(Boolean);
    if (!categories?.length) return res.status(400).json({ message: "categories query parameter is required" });
    try {
        const products = await Product.find({ category: { $in: categories } });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Unable to search products", error: error.message });
    }
});

// Search products not from a category -> GET http://localhost:3000/products/search/not-category?category=grocery
app.get("/products/search/not-category", async (req, res) => {
    const category = req.query.category?.toLowerCase().trim();
    if (!category) return res.status(400).json({ message: "category query parameter is required" });
    try {
        const products = await Product.find({ category: { $ne: category } });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Unable to search products", error: error.message });
    }
});

// Search products by name (case-insensitive) -> GET http://localhost:3000/products/search/name?name=iphone
app.get("/products/search/name", async (req, res) => {
    const name = req.query.name?.trim();
    if (!name) return res.status(400).json({ message: "name query parameter is required" });
    try {
        const products = await Product.find({ name: { $regex: name, $options: "i" } });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Unable to search products", error: error.message });
    }
});

// Sort products by price, low to high -> GET http://localhost:3000/products/sort/price-asc
app.get("/products/sort/price-asc", async (req, res) => {
    try { res.status(200).json({ products: await Product.find().sort({ price: 1 }) }); }
    catch (error) { res.status(500).json({ message: "Unable to sort products", error: error.message }); }
});

// Sort products by price, high to low -> GET http://localhost:3000/products/sort/price-desc
app.get("/products/sort/price-desc", async (req, res) => {
    try { res.status(200).json({ products: await Product.find().sort({ price: -1 }) }); }
    catch (error) { res.status(500).json({ message: "Unable to sort products", error: error.message }); }
});

// Sort products by rating, high to low -> GET http://localhost:3000/products/sort/rating-desc
app.get("/products/sort/rating-desc", async (req, res) => {
    try { res.status(200).json({ products: await Product.find().sort({ rating: -1 }) }); }
    catch (error) { res.status(500).json({ message: "Unable to sort products", error: error.message }); }
});

// Get the top 5 expensive products -> GET http://localhost:3000/products/top/expensive
app.get("/products/top/expensive", async (req, res) => {
    try { res.status(200).json({ products: await Product.find().sort({ price: -1 }).limit(5) }); }
    catch (error) { res.status(500).json({ message: "Unable to get expensive products", error: error.message }); }
});

// Get paginated products -> GET http://localhost:3000/products/pagination?page=1&limit=10
app.get("/products/pagination", async (req, res) => {
    const page = Number.parseInt(req.query.page, 10);
    const limit = Number.parseInt(req.query.limit, 10);
    if (!Number.isInteger(page) || !Number.isInteger(limit) || page < 1 || limit < 1) return res.status(400).json({ message: "page and limit must be positive integers" });
    try {
        const products = await Product.find().skip((page - 1) * limit).limit(limit);
        res.status(200).json({ page, limit, products });
    } catch (error) {
        res.status(500).json({ message: "Unable to get paginated products", error: error.message });
    }
});

// Increase product stock -> PATCH http://localhost:3000/products/iphone-16/stock/increase
app.patch("/products/:slug/stock/increase", async (req, res) => {
    const quantity = getNumberQuery(req.body.quantity);
    if (quantity === null || quantity <= 0) return res.status(400).json({ message: "quantity must be greater than zero" });
    try {
        const product = await Product.findOneAndUpdate({ slug: req.params.slug }, { $inc: { stock: quantity }, $set: { isAvailable: true } }, { new: true, runValidators: true });
        if (!product) return res.status(404).json({ message: "Product was not found" });
        res.status(200).json({ message: "Product stock increased", product });
    } catch (error) {
        res.status(500).json({ message: "Unable to increase stock", error: error.message });
    }
});

// Decrease product stock -> PATCH http://localhost:3000/products/iphone-16/stock/decrease
app.patch("/products/:slug/stock/decrease", async (req, res) => {
    const quantity = getNumberQuery(req.body.quantity);
    if (quantity === null || quantity <= 0) return res.status(400).json({ message: "quantity must be greater than zero" });
    try {
        const product = await Product.findOne({ slug: req.params.slug });
        if (!product) return res.status(404).json({ message: "Product was not found" });
        if (product.stock < quantity) return res.status(400).json({ message: "Insufficient stock" });

        product.stock -= quantity;
        if (product.stock === 0) product.isAvailable = false;
        await product.save();
        res.status(200).json({ message: "Product stock decreased", product });
    } catch (error) {
        res.status(500).json({ message: "Unable to decrease stock", error: error.message });
    }
});

// Add a unique tag to a product -> PATCH http://localhost:3000/products/iphone-16/tags
app.patch("/products/:slug/tags", async (req, res) => {
    const tag = req.body.tag?.trim();
    if (!tag) return res.status(400).json({ message: "tag is required" });
    try {
        const product = await Product.findOneAndUpdate({ slug: req.params.slug }, { $addToSet: { tags: tag } }, { new: true, runValidators: true });
        if (!product) return res.status(404).json({ message: "Product was not found" });
        res.status(200).json({ message: "Tag added", product });
    } catch (error) {
        res.status(500).json({ message: "Unable to add tag", error: error.message });
    }
});

// Remove a tag from a product -> PATCH http://localhost:3000/products/iphone-16/tags/remove
app.patch("/products/:slug/tags/remove", async (req, res) => {
    const tag = req.body.tag?.trim();
    if (!tag) return res.status(400).json({ message: "tag is required" });
    try {
        const product = await Product.findOneAndUpdate({ slug: req.params.slug }, { $pull: { tags: tag } }, { new: true, runValidators: true });
        if (!product) return res.status(404).json({ message: "Product was not found" });
        res.status(200).json({ message: "Tag removed", product });
    } catch (error) {
        res.status(500).json({ message: "Unable to remove tag", error: error.message });
    }
});

// Add a review to a product -> PATCH http://localhost:3000/products/iphone-16/reviews
app.patch("/products/:slug/reviews", async (req, res) => {
    const { user, comment, rating } = req.body;
    if (!user || !comment || getNumberQuery(rating) === null) return res.status(400).json({ message: "user, comment, and rating are required" });
    try {
        const product = await Product.findOne({ slug: req.params.slug });
        if (!product) return res.status(404).json({ message: "Product was not found" });

        product.reviews.push({ user, comment, rating });
        await product.save();
        res.status(200).json({ message: "Review added", product });
    } catch (error) {
        res.status(400).json({ message: "Unable to add review", error: error.message });
    }
});

// Get all reviews for a product -> GET http://localhost:3000/products/iphone-16/reviews
app.get("/products/:slug/reviews", async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug }).select("name slug reviews");
        if (!product) return res.status(404).json({ message: "Product was not found" });

        res.status(200).json({ reviews: product.reviews });
    } catch (error) {
        res.status(500).json({ message: "Unable to get reviews", error: error.message });
    }
});

// Remove the latest review -> PATCH http://localhost:3000/products/iphone-16/reviews/remove-last
app.patch("/products/:slug/reviews/remove-last", async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug });
        if (!product) return res.status(404).json({ message: "Product was not found" });
        if (product.reviews.length === 0) return res.status(400).json({ message: "Product has no reviews to remove" });

        const removedReview = product.reviews.pop();
        await product.save();
        res.status(200).json({ message: "Latest review removed", removedReview, product });
    } catch (error) {
        res.status(500).json({ message: "Unable to remove review", error: error.message });
    }
});

// Postman body: { "discount": 15 }
// Update a product discount -> PATCH http://localhost:3000/products/iphone-16/discount
app.patch("/products/:slug/discount", async (req, res) => {
    const discount = getNumberQuery(req.body.discount);
    if (discount === null || discount < 0 || discount > 90) {
        return res.status(400).json({ message: "discount must be a number from 0 to 90" });
    }
    try {
        const product = await Product.findOneAndUpdate(
            { slug: req.params.slug },
            { $set: { discount } },
            { new: true, runValidators: true }
        );
        if (!product) return res.status(404).json({ message: "Product was not found" });

        res.status(200).json({ message: "Product discount updated", product });
    } catch (error) {
        res.status(500).json({ message: "Unable to update discount", error: error.message });
    }
});

// Get discounted products -> GET http://localhost:3000/products/search/discounted
app.get("/products/search/discounted", async (req, res) => {
    try {
        const products = await Product.find({ discount: { $gt: 0 } });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Unable to get discounted products", error: error.message });
    }
});

// Get product counts by category -> GET http://localhost:3000/products/stats/category-count
app.get("/products/stats/category-count", async (req, res) => {
    try {
        const categories = await Product.aggregate([
            { $group: { _id: "$category", count: { $sum: 1 } } },
            { $project: { _id: 0, category: "$_id", count: 1 } },
            { $sort: { category: 1 } }
        ]);
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ message: "Unable to get category statistics", error: error.message });
    }
});

// Get product by MongoDB id -> GET http://localhost:3000/products/67d3c2f4b6e5f7a8c9d0e1f2
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

// Get product by slug -> GET http://localhost:3000/products/slug/iphone-16
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

// Update product by slug -> PATCH http://localhost:3000/products/slug/iphone-16
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




// Delete product by slug -> DELETE http://localhost:3000/products/slug/iphone-16
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
