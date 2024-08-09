import {createSlice} from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

// const initialState=localStorage.getItem("cart") ? JSON.parse() 
//     (localStorage.getItem("cart")) : {cartItems:[]};
const initialState = (() => {
  const cartFromStorage = localStorage.getItem("cart");
  try {
    return cartFromStorage ? JSON.parse(cartFromStorage) : { cartItems: [] };
  } catch (e) {
    // Handle JSON parsing error or log it
    console.error("Failed to parse cart from localStorage", e);
    return { cartItems: [] };
  }
});


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state,action)=>{
            const item = action.payload;
            const itemExist = state.cartItems.find((x)=> x._id === item._id);

            if (itemExist){
                state.cartItems = state.cartItems.map((x)=> x._id === itemExist._id ? item :x);

            }
            else{
                state.cartItems = [...state.cartItems,item]
            }
            //item price calculation
            //shipping price
            //tax
            //total price
            console.log(item.price);
            console.log(item.qty);
            return updateCart(state);
            },
        removeFromCart:(state,action)=>{
          state.cartItems=state.cartItems.filter((i)=>i._id !== action.payload)
          return updateCart(state);
        }
        
        },
});
export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
