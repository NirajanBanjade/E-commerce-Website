import mongoose from "mongoose";
// import Product from "./prodmodel";

const ordersSchema= mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    orderItems:[{
        name:{
            type:String,
            required:true
        },
        qty:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        product:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Product"
        }

    }
],
shipping:{
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    postalCode:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    } 
},
PaymentMethod:{
    type:String,
    required:true
},
paymentResult:{
    id:{
        type:String,
    },
    status:{type:String},
    updateTime:{type:String},
    emailAddr:{type:String}

},
itemsPrice:{
    type:Number,
    required:true,
    default:0.0
},
tax:{
    type:Number,
    required:true,
    default:0.0
    
},
shippingCost:{
    type:Number,
    required:true,
    default:0.0
},
totalPrice:{
    type:Number,
    required:true,
    default:0.0
},
isPaid:{
    type:Boolean,
    default:false,
    required:true
},
paidAt:{
    type:Date
}
,isReceived:{
    type:Boolean,
    default:false,
    required:true
},
receivedAt:{
    type:Date
}
},{
    timestamp:true
}
);

const orderS=mongoose.model("Orders",ordersSchema);

export default orderS;