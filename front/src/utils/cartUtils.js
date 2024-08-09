 export const addDecimals = (num)=>{
    return (Math.round(num*100) /100).toFixed(2);

}
export const updateCart =(state)=>{
    state.itemsPrice = Number(addDecimals(state.cartItems.reduce((acc,item)=>acc+Number(item.price) * Number(item.qty), 0)));
            
    console.log(state.itemsPrice);
    // if order > $150 , free shipping, else 10$ shipping.

    state.shippingPrice = addDecimals(state.itemsPrice > 150 ? 0 :10);
    // tax=13%
    state.taxPrice = addDecimals(Number((0.13*state.itemsPrice)).toFixed(2));

    //total
    state.totalPrice=(
        Number(state.itemsPrice)+
        Number(state.shippingPrice)+
        Number(state.taxPrice)).toFixed(2);
        localStorage.setItem('cart',JSON.stringify(state));
}