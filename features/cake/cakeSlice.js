import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes : 10
}
const cakeSlice = createSlice({
    name: "cake",
    initialState ,
    reducers:{
        ordered :(state)=>{
            state.numOfCakes --
        },
        restocked : (state)=>{
            state.numOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer;
module.exports.cakeAction = cakeSlice.actions