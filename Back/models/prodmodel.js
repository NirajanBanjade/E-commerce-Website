import mongoose from "mongoose";

const reviewsSchema= new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const prodSchema= new mongoose.Schema(
    {
        User:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"user"
        },
        name:{
            type:String,
            required: true
        },
        image:{
            type:String,
            required:true
        },
        brand:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        reviews:[reviewsSchema],
        category:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true,
            default:0
        },
        rating:{
            type:Number,
            required:true,
            default:0
        },
        numReviews:{
            type:Number,
            required:true,
            default:0
        },
        countStock:{
            type :Number,
            required:true,
            default:0
        }
    },{
        timestamps:true
    }
)
const Product=mongoose.model("Product",prodSchema);

export default Product;