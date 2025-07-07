import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import userProfile from "./data/users.js";
import List from "./data/List.js";
import User from "./models/UserModel.js";
import Product from "./models/prodmodel.js";
import orderS from "./models/orders.js";
import myDB from "./config/db.js";

dotenv.config();

myDB();

const importData=async ()=>{
    try {
        await orderS.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const usersCreated=await User.insertMany(userProfile);

        const adminUser=usersCreated[0]._id
        const sample=List.map((product)=>{
            return {...product,ProductCategory:"default",User:adminUser};
        })

        await Product.insertMany(sample);

        console.log('Data inserted !'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData= async()=>{
    try {
        await orderS.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed !'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

if(process.argv[2] === "-d"){
    destroyData();
}
else{
    importData();
}