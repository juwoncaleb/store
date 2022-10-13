import { Schema, model, models } from "mongoose"

const productSchema = new Schema({
  categories: {
    type: String
  },
  subCategory: {
    type: String
  },
  name: {
    type: String,
    required: true,
    maxlength: 60,
  },
  price: {
    type: Number,
    maxlength: 60,
  },
  img: {
    type: String,
    maxlength: 60,
  },

  quantity: {
    type: Number,
  },



},
{ timestamps: true }

)
const Product = models.Product || model('Product', productSchema)
export default Product