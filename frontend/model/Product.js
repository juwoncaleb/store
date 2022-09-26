import { Schema, model } from "mongoose"

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
    required: true,
    maxlength: 60,
  },
  img: {
    type: String,
    required: true,
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

);
export default mongoose.models.Product || mongoose.model('Product', productSchema)

