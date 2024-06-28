import asyncHandler from "../middleware/asynchandler.js";
import Product from "../models/prodmodel.js";


// @desc fetch all products
// @route Get/api/products
// @access Public 

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

export {getProducts,getProductsbyId};



