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
    address: [
        {
            street: String
        }, {
            address2: String

        }
        , {
            city: String

        }
        , {
            state: String

        }
        , {
            phoneNumber: Number

        }
    ]
})
const order = model.order || model("order", orderSchema);
export default order
