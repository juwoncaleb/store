import { Schema, model, models } from "mongoose"

const orderSchema = new Schema({

    quantity: {
        type: Number,
    },
    price:{
        type: Number,
    },
    paymentStatus:{
        type:String
    },
    delivery:{
        type:Boolean,
    },
    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
    }
})
const Order = model.Order || model("Order", orderSchema);
export default Order
