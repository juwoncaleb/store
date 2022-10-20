import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "../redux/userSlice"

export default configureStore({
    reducer:{
       cart: cartReducer
    }
}) 