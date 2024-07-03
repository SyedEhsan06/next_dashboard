import { Schema } from "mongoose";
//products schema
import mongoose from "mongoose";
export const ProductsSchema = new Schema(
  {
    product_id:{
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    sold: {
      type: Number,
    },
    category: {
      type: String,
    },
    subcategory: {
      type: String,
    },

    description: {
      type: String,
    },
    image: {
      type: String,
    },
    stockStatus: {
      type: String,
      enum: ["In Stock", "Out of Stock"],
      default: "In Stock",
    },
  },
  {
    timestamps: true,
  }
);

export const Product =
  mongoose.models?.Product || mongoose.model("Product", ProductsSchema);

export default Product;
