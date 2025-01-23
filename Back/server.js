//this is my server's entry point
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import myDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
// const express=require('express');   this is common js convention to import express.
import { notFound , errorHandler } from './middleware/errormiddle.js';
import cors from 'cors';
const port = process.env.PORT;
myDB();

const app=express();
app.use(cors());
app.get('/',(req,res)=>{
    res.send("API is working");
})

app.use('/api/List',productRoutes);

app.use(notFound);
app.use(errorHandler);

// function handle(req,res){
//     console.log("ehk");
// }
// apply.get('/',handle);

app.listen(port,()=>
    console.log(`Server is running on ${port}`)
)
// apply.listen(port,()=>
//     console.log(`Server is running on ${port}`)
// ).on('error',(error)=>{
//     console.log("failed");
// })

