//this is my server's entry point
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import myDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
// const express=require('express');   this is common js convention to import express.
import { notFound , errorHandler } from './middleware/errormiddle.js';
import cors from 'cors';
const port = process.env.PORT || 5001;


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
// app.listen(port,()=>
//     console.log(`Server is running on 5001`)
// ).on('error',(error)=>{
//     console.log("failed");
// })

// export default app;

// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import myDB from './config/db.js';
// import productRoutes from './routes/productRoutes.js';
// import { notFound, errorHandler } from './middleware/errormiddle.js';

// dotenv.config();

// // Initialize database connection
// myDB();

// const app = express();
// app.use(cors());

// // Test route to verify the server is running
// app.get('/', (req, res) => {
//     res.send("API is working");
// });

// // Product routes
// app.use('/api/List', productRoutes);

// // Middleware for handling 404 errors
// app.use(notFound);

// // Middleware for handling other errors
// app.use(errorHandler);

// // Export the app for serverless deployment
// export default app;
