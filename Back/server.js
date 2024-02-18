//this is my server's entry point

import express from 'express';
import List from './data/List.js';

// const express=require('express');   this is common js convention to import express.
const port = 5000;
const app=express();

app.get("/",(req,res)=>{
    res.send("API is working");
})

app.get('/api/List',(req,res)=>{
    res.json(List);
})

app.get('/api/List/:id',(req,res)=>{
    const prod=List.find((p)=>p._id===req.params.id);(
    res.json(prod));
})

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

