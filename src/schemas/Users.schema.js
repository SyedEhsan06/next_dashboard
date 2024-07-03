import { Schema } from "mongoose";
import mongoose from "mongoose";

//address schema
export const AddressSchema = new Schema(
  {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    zip: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//orders schema
export const OrdersSchema = new Schema(
  {
    userId: {
      type: String,
    },
    productId: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UsersSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
    phone: {
      type: String,
    },
    token: {
      type: String,
    },
    status: {
      type: String,
    },
    address: [AddressSchema],
    orders: [OrdersSchema],
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models?.User || mongoose.model("User", UsersSchema);

export default User;
