import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    // the initialState of different app and the nme
    name: 'user',
    initialState: {
        name: "john",
        email: "john@example.com",
    },
     
    // this contains the action to be carried out 
    reducers: {
        update: (state, action) => {
            // state.name = the initial state of the name , action.payload .name = action.payload + name 
            state.name = action.payload.name;
            // state.name = the initial state of the name , action.payload .name = action.payload + name 
            state.email = action.payload.email;
        }
    }
})

// this sends the action to any part of the application
export const { update } = userSlice.actions;
// this sends the state to the store , so it cvn be used all over the application
export default userSlice.reducer
