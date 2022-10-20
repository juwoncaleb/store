import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        total:0,
        quantity:0,
    },
    reducers:{
        addProduct:(state, action)=>{
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
            state.quantity += 1
        },
        reset:(state)=>{
                state = initialState;
        }
    }
})

//export the actions out 
export const  {addProduct , reset}= cart.actions;

export default cart.reducer;