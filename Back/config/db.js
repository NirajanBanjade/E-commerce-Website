import mongoose from "mongoose";

const myDB=async ()=>{
    try {
        const conect= await mongoose.connect(process.env.MONGO);
        console.log(`MongoDB connected at : ${conect.connection.host}`);
    } catch (error) {
        console.log(`Error message: ${error}`);
        process.exit(1);
    }
 };
 export default myDB;