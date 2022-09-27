import { Schema, model, models } from "mongoose"

const productSchema = new Schema({
  categories: {
    type: String
  },
  subCatergory: {
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
  categories: {
    type: String
  },
  size:
    [
      {
        XXL: Boolean
      },
      {
        XL: Boolean
      },
      {
        L: Boolean
      },
      {
        M: Boolean
      }, {
        S: Boolean
      }
    ]

},
  { timestamps: true }

)
const Product = models.Product ||  model('Product', productSchema) 
export default Product