import express from "express";
const router = express.Router();
// import List from '../data/List.js'; // note this for long.
import asyncHandler from "../middleware/asynchandler.js";
import Product from "../models/prodmodel.js";

router.get('/',asyncHandler(async(req,res)=>{
    const List=await Product.find({});
    res.json(List);
}));

router.get('/:id',asyncHandler(async(req,res)=>{
    const prod=await Product.findById(req.params.id);
    if(prod){
        res.json(prod);
    }
    else{
        res.status(404);
        throw new Error('No Product traces!');
    }
    
}));

export default router;
