import { Schema, model } from "mongoose"

const clothesSchema = new Schema({
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
const collectionName = 'clothes'
const Clothes = model('Clothes', clothesSchema, collectionName);

export default Clothes 
