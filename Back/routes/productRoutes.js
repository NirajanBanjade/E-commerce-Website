import express from "express";
const router = express.Router();
// import List from '../data/List.js'; // note this for long.
// import asyncHandler from "../middleware/asynchandler.js";
// import Product from "../models/prodmodel.js";
import { getProducts,getProductsbyId, updateProduct } from "../controllers/controllerP.js";

router.route('/').get(getProducts);
router.route('/:id').get(getProductsbyId);
router.route('/:id').put(updateProduct);

export default router;
