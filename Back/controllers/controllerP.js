import asyncHandler from "../middleware/asynchandler.js";
import Product from "../models/prodmodel.js";


const getProducts = asyncHandler(async (req, res)=>{
    const products=await Product.find({});
    res.json(products);    
});

// @desc fetch all products
// @route Get/api/products/:id
// @access Public 

const getProductsbyId = asyncHandler(async (req, res)=>{
    const prod=await Product.findById(req.params.id);
    if(prod){
        res.json(prod);
    }
    else{
        res.status(404);
        throw new Error('No Product traces!');
    }
       
});

const postProduct = asyncHandler(async (req,res)=>{
 
    const prod= await Product.create(req.body);
    res.status(200).json(prod);
    console.log("posted");

})

const updateProduct = asyncHandler(async(req,res)=>{
    const prod = await Product.findByIdAndUpdate(
        req.params.id, // id
        req.body, //new body to be set
        { new: true, runValidators: true }
    )
    if(!prod){
        return res.status(404).json({message: 'No product with given id found!'});
    }
    // const updated_prod=await Product.findById(req.params.id);
    console.log("Updated Product!")
    const updatedProd = await prod.save(); // ✅ Save the updated product

    res.status(200).json(updatedProd);
})


export {getProducts,getProductsbyId,postProduct,updateProduct};



